import { ApolloServer } from "apollo-server-micro";
//import { schema } from "../../graphql/schema";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import { createContext } from "../../graphql/context";

const cors = require("micro-cors")();
const httpHeadersPlugin = require("apollo-server-plugin-http-headers");
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [httpHeadersPlugin],
  context: createContext,
});

const startServer = apolloServer.start();

export default cors(async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
