const AWS = require('aws-sdk');
const s3  = new AWS.S3();

exports.handler = async (event, context) => {
  console.log("# -----------------------------------------");
  const data = await s3.listBuckets().promise();
  data.Buckets.map(bucket => console.log("S3 Buckets::" + bucket.Name));
  console.log("# -----------------------------------------");
  console.log("event: ", event)
  console.log("context: ", context)

  return context.logStreamName
}
