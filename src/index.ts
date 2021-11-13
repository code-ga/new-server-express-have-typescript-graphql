import { createServer } from "http";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import path from "path";
import dotenv from "dotenv";
import connectToDB from "./util/connectToDB";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { HelloResolver } from "./resolvers/hello";
dotenv.config({ path: path.resolve(__dirname, "./.env") });
const main = async () => {
  const app = express();
  await connectToDB(process.env.DB_URL as string);
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });
  const HttpServer = createServer(app);
  const port = process.env.PORT || 4000;
  HttpServer.listen(port, () => {
    console.log(
      `Server is running on port ${port} and graphgl path http://127.0.0.1:${port}${apolloServer.graphqlPath}`
    );
  });
};
main().catch(console.log);
