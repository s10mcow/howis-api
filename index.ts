const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const resolvers = require("./resolvers.ts");
const typeDefs = require("./schema.graphql.ts");
// Create an instance of PrismaClient
const prisma = new PrismaClient();

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Construct and return the context object
    // const user = authenticateUser(req.headers.authorization);

    return {
      //   user,
      prisma,
    };
  },
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
