import { CognitoJwtVerifier } from "aws-jwt-verify";
import { GraphQLError } from "graphql";
import { handlers, middleware } from "@as-integrations/aws-lambda";

const requestHandler = handlers.createAPIGatewayProxyEventV2RequestHandler();

const verifier = CognitoJwtVerifier.create({
  userPoolId: "us-east-2_JKkzqPjLL",
  tokenUse: "access",
  clientId: "3o4o3k46pdrvo8e9o46rl2ve19",
});

export const authenticationMiddleware: middleware.MiddlewareFn<
  typeof requestHandler
> = async (event) => {
  const { headers } = event;
  const { authorization } = headers;

  if (!authorization) {
    throw new GraphQLError("No authorization header");
  }

  // eslint-disable-next-line prefer-destructuring
  const token = authorization.split(" ")[1];

  if (!token) {
    throw new GraphQLError("No token");
  }

  try {
    const payload = await verifier.verify(token);

    console.log("Token is valid. Payload:", payload);
  } catch (err) {
    console.log("Token not valid!", err);
    throw new GraphQLError(`Token err:, ${err}`);
  }
};
