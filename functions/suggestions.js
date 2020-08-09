module.exports.handler = async event => {

  console.log(event);

  // get querystring variables
  const { q, latitude, longitude } = event.queryStringParameters;

  const suggestions = []

  // return 200 status code
  return {
    statusCode: 200,
    body: JSON.stringify(suggestions),
  }

}
