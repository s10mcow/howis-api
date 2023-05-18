import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { PrismaClient } from "@prisma/client";
import {
  startServerAndCreateLambdaHandler,
  handlers,
  middleware,
} from "@as-integrations/aws-lambda";
import { authenticationMiddleware } from "./authentication";
import { GraphQLError } from "graphql";

const prisma = new PrismaClient();

export type ApolloContext = {
  prisma: PrismaClient;
};

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});

const options = {
  middleware: [authenticationMiddleware],
  context: async () => ({
    prisma,
    user: ({ req }) => {
      const { headers } = req;

      const { authorization } = headers;
      if (!authorization) {
        throw new GraphQLError("No authorization header");
      }

      const token = authorization.split(" ")[1];
      if (!token) {
        throw new GraphQLError("No token");
      }
    },
  }),
};

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  options
);
