import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "World";
  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};
