import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
const port = 3000;

const uri =
  "mongodb+srv://mongodb:mongodb@cluster1.u7qf5d9.mongodb.net/toDosDB?retryWrites=true&w=majority&appName=Cluster1";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const bootstrap = async () => {
  await client.connect();
  const DB = await client.db("toDosDB");
  console.log(
    "Pinged your deployment. You successfully connected to MongoDB!!!"
  );
  const cltion = await DB.collection("toDos").insertOne({
    tile: "mongodb",
    body: "learning mongodb",
  });
  console.log(cltion);

  app.listen(port, () => {
    console.log(`✅ Example app listening on port ${port}`);
  });
};

bootstrap();
