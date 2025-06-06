import express, { Request, Response } from "express";
const toDosRouter = express.Router();
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../../db/todo.json");
const AllToDoslData = fs.readFileSync(filePath, { encoding: "utf-8" });

toDosRouter.get("/all-todos", (req: Request, res: Response) => {
  res.json(AllToDoslData);
});

toDosRouter.get("/:title", (req: Request, res: Response) => {
  console.log(req.params);
});

toDosRouter.post("/create-todo", (req: Request, res: Response) => {
  console.log(req.body);

  res.send("Your ToDo was created!");
});

toDosRouter.patch("/:title", (req: Request, res: Response) => {});

toDosRouter.delete("/:title", (req: Request, res: Response) => {});

export { toDosRouter };
