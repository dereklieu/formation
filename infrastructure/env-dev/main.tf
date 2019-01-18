variable "domain"               {
  description = "Domain name for the deployed site, eg 'lieu.io'"
}

variable "region"               {
  description = "AWS region, eg 'us-east-1'"
}

variable "backend_bucket"       {
  description = "AWS bucket name for S3 backend to store Terraform state"
  default     = "terraform-state"
}

variable "backend_key"          {
  description = "AWS S3 key name for Terraform state file"
  default     = "terraform.tfstate"
}

variable "aws_access_key"       {}

variable "aws_secret_key"       {}

variable "env_vars"             { type = "map" }

variable "response_not_found"   {
  description = "Return 200 for 404 paths to support SPA routing"
  type        = "map"
  default     = {
    error_code          = "404"
    response_code       = "200"
    response_page_path  = "/"
  }
}

variable "response_forbidden"   {
  description = "Return 200 for 404 paths to support SPA routing"
  type        = "map"
  default     = {
    error_code          = "403"
    response_code       = "200"
    response_page_path  = "/"
  }
}

provider "aws" {
  region     = "${var.region}"
  access_key = "${var.aws_access_key}"
  secret_key = "${var.aws_secret_key}"
  version    = "~> 1.1"
}

module "app" {
  source              = "../app"
  domain              = "${var.domain}"
  app_package         = "../../build/app-package.zip"
  env_vars            = "${var.env_vars}"
  render_interval     = "45 minutes"
  response_not_found  = "${var.response_not_found}"
  response_forbidden  = "${var.response_forbidden}"
}

terraform {
  backend "s3" {}
}
