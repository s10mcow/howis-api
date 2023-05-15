
import type { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema_simple.graphql",
  generates: {
    "src/types/types.d.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../server#ApolloContext",
        useIndexSignature: true,
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
