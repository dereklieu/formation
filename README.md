# Formation

Publishing static files on S3 with Lambda and Terraform. A timed (45 minute interval) CloudWatch event triggers a Lambda function that rebuilds the site and deploys it to S3. CloudFront provides CDN and redirects to S3. Route53 configuration is included as well.

This repo runs [dereklieu.com](https://dereklieu.com).

## Installation and Build

This command installs dependencies and builds the site. The `prepare-deploy` step both builds the site and zips it into a Lambda-ready package.

```
yarn && yarn prepare-deploy
```

## Infrastructure Deployment

This repo uses [Terraform](https://www.terraform.io) to manage infrastructure deployment.

### Backend Configuration

Terraform state is stored in on S3. To initialize Terraform locally, a backend configuration file must be set. This repo expects this file structure at `infrastructure/env-dev/backend.tfvars`:

```
bucket     = "my-bucket-name"
key        = "terraform.tfstate"
region     = "us-east-1"
access_key = "my-access-key"
secret_key = "my-secret-key"
```

Once this is set, run `yarn terraform-init` to initialize modules and sync with remote backend state.

### Infrastructure Configuration

A second configuration file is required for infrastructure settings and credentials. The repo expects this file structure at `infrastructure/env-dev/terraform.tfvars`.

```
domain = "my-domain-name"
region = "us-east-1"

aws_access_key = "my-access-key"
aws_secret_key = "my-secret-key"

env_vars = {
  NODE_ENV = "production"
}
```

### Infrastructure Deployment

Detect scheduled changes and plan a redeployment or new deployment:

```
yarn terraform-plan
```


Deploy (a site package must be built before running this step):

```
yarn terraform-apply
```
