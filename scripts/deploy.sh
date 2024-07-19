BUCKET_NAME=$1
DISTRIBUTION_ID=$2

echo "**** Install ****"
# Install production dependencies
yarn --production

echo "**** Build ****"
# Build
REACT_APP_PROXY=https://d1cv5d56xufkav.cloudfront.net yarn build

echo "**** Deploy ****"
# Sync build with S3 bucket
aws s3 sync build s3://$BUCKET_NAME

# Invalidate cache
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --no-cli-pager