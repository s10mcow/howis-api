import { readFileSync } from "fs";
import { resolve } from "path";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type ApolloContext = {
  prisma: PrismaClient;
};

const GRAPHQL_SCHEMA_PATH = resolve(__dirname, "schema_simple.graphql");

const typeDefs = readFileSync(GRAPHQL_SCHEMA_PATH, { encoding: "utf-8" });

const server = new ApolloServer<ApolloContext>({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({ prisma }),
}).then((result) => {
  console.log(`🚀 Server ready at: ${result.url}`);
});
