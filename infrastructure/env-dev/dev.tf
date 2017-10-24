variable "domain"               {}
variable "region"               {}
variable "aws_access_key"       {}
variable "aws_secret_key"       {}
variable "github_username"      {}

provider "aws" {
  region        = "${var.region}"
  access_key    = "${var.aws_access_key}"
  secret_key    = "${var.aws_secret_key}"
}

module "app" {
  source = "../modules/app"

  domain          = "${var.domain}"
  github_username = "${var.github_username}"
}
