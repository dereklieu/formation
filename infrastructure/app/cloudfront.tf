data "aws_acm_certificate" "website_certificate" {
  domain    = "${var.domain}"
  statuses  = ["ISSUED"]
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name   = "${aws_s3_bucket.website.bucket_domain_name}"
    origin_id     = "websiteS3Origin"
  }

  aliases = ["${var.domain}", "www.${var.domain}"]

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  price_class = "PriceClass_100"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = "websiteS3Origin"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  custom_error_response = ["${var.response_not_found}", "${var.response_forbidden}"]

  viewer_certificate {
    acm_certificate_arn       = "${data.aws_acm_certificate.website_certificate.arn}"
    minimum_protocol_version  = "TLSv1"
    ssl_support_method        = "sni-only"
  }
}
