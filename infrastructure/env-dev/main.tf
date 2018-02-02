variable "domain"               {}
variable "region"               {}
variable "aws_access_key"       {}
variable "aws_secret_key"       {}
variable "env_vars"             { type = "map" }
variable "response_not_found"   { type = "map" }
variable "response_forbidden"   { type = "map" }

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
