import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import resolvers from "./resolvers";
import { readFileSync } from "fs";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
}

// Create an instance of ApolloServer
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => ({
    prisma,
  }),
});

console.log(`🚀  Server ready at: ${url}`);
