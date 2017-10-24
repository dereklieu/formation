variable "domain"               {}
variable "region"               {}
variable "aws_access_key"       {}
variable "aws_secret_key"       {}

provider "aws" {
  region        = "${var.region}"
  access_key    = "${var.aws_access_key}"
  secret_key    = "${var.aws_secret_key}"
}

module "app" {
  source = "../modules/app"
  domain          = "${var.domain}"
}
