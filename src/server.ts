import { readFileSync } from "fs";
import { resolve } from "path";
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

// startStandaloneServer(server, {
//   listen: { port: 4000 },
//   context: async () => ({ prisma }),
// }).then((result) => {
//   console.log(`🚀 Server ready at: ${result.url}`);
// });

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    context: async () => ({ prisma }),
  }
);
