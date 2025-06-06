import express, { Request, Response } from "express";
const toDosRouter = express.Router();
import { client } from "../../config/mongoDB";
import { ObjectId } from "mongodb";

toDosRouter.get("/all-todos", async (req: Request, res: Response) => {
  const DB = await client.db("toDosDB");
  const dbData = await DB.collection("toDos").find({}).toArray();
  res.json(dbData);
});

toDosRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const DB = await client.db("toDosDB");
  const dbData = await DB.collection("toDos").findOne({
    _id: new ObjectId(id),
  });
  res.json(dbData);
});

toDosRouter.post("/create-todo", async (req: Request, res: Response) => {
  const { title, description, prority, isCompleted } = req.body;
  const DB = await client.db("toDosDB");
  const dbCollection = await DB.collection("toDos").insertOne({
    title: title,
    description: description,
    prority: prority,
    isCompleted: isCompleted,
  });

  res.send(dbCollection);
});

toDosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, description, prority, isCompleted } = req.body;
  const db = await client.db("toDosDB");
  const conllection = await db.collection("toDos");
  const updateData = await conllection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, description, prority, isCompleted } },
    { upsert: true }
  );
  res.json(updateData);
});

toDosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const db = await client.db("toDosDB");
  const collection = await db.collection("toDos");
  const deleteOne = await collection.deleteOne({ _id: new ObjectId(id) });
  res.json(deleteOne);
});

export { toDosRouter };
