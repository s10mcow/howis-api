import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import resolvers from "./resolvers";
import { readFileSync } from "fs";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = readFileSync("./schema_simple.graphql", {
  encoding: "utf-8",
});

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
//   context: async ({ req }) => ({
//     prisma,
//   }),
// });

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler()
);

// console.log(`🚀  Server ready at: ${url}`);
