import app from "./app";
import { client } from "../config/mongoDB";
const port = 3000;

const bootstrap = async () => {
  await client.connect();
  console.log(
    "Pinged your deployment. You successfully connected to MongoDB!!!"
  );

  app.listen(port, () => {
    console.log(`✅ Example app listening on port ${port}`);
  });
};

bootstrap();
