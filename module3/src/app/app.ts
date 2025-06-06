import express, { Application, Request, Response } from "express";
import { toDosRouter } from "./todos/todos.router";
const app: Application = express();
app.use(express.json());
app.use("/todos", toDosRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to todo app website!!");
});

export default app;
