#aws s3 --profile scaledfury sync ./public_site/build/ s3://teststack-buck6f4d3e52-1k7lalnsmr2dh

aws s3 --profile scaledfury sync --exclude "*.zip" --exclude "$0" --exclude ".git/*" ./build s3://teststack-buck6f4d3e52-1k7lalnsmr2dh
aws cloudfront --profile scaledfury create-invalidation --distribution-id E2CK22GALL0RJB --paths '/*'

