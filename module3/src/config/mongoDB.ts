import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://mongodb:mongodb@cluster1.u7qf5d9.mongodb.net/toDosDB?retryWrites=true&w=majority&appName=Cluster1";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
