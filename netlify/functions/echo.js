exports.handler = async function(event, context) {
  const params = event.queryStringParameters || {};
  return {
    statusCode: 200,
    body: JSON.stringify({ received: params })
  };
};
