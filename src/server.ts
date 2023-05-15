import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { PrismaClient } from "@prisma/client";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";

const prisma = new PrismaClient();

export type ApolloContext = {
  prisma: PrismaClient;
};

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    context: async () => ({ prisma }),
  }
);
