exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ time: new Date().toISOString() })
  };
};
