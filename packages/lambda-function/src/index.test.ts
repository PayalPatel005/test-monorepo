import { handler } from './index';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

describe('Lambda Function', () => {
  it('returns "Hello, Payal" when name is provided', async () => {
    const event: Partial<APIGatewayProxyEvent> = {
      queryStringParameters: { name: 'Payal' }
    };
    const context: Context = {} as Context;

    const result = await handler(event as APIGatewayProxyEvent, context);
    expect(result.body).toBe('Hello, Payal');
  });

  it('returns "Hello, World" when no name is provided', async () => {
    const event: Partial<APIGatewayProxyEvent> = {};
    const context: Context = {} as Context;

    const result = await handler(event as APIGatewayProxyEvent, context);
    expect(result.body).toBe('Hello, World');
  });
});
