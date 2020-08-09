const jestPlugin = require('serverless-jest-plugin');
const file = require('../functions/suggestions');

const func = jestPlugin.lambdaWrapper.wrap(file, { handler: 'handler' });

describe('GET /suggestions', () => {

  beforeAll(async () => { });

  test('with a non-existent city', async () => {

    const response = await func.run({
      queryStringParameters: { 
        q: 'SomeRandomCity' 
      }
    });

    const body = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(body).toEqual([]);

  });

});

