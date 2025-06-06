import express, { Application, NextFunction, Request, Response } from "express";
import { toDosRouter } from "./todos/todos.router";
const app: Application = express();
app.use(express.json());
app.use("/todos", toDosRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("WelCome to My todo app");
});
app.get(
  "/error",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Custom middleware checking in cli");

    next();
  },
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(error);
  }
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "This Page is Not found" });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(500).json({
      message: "This Error handeling by express global error handaling ",
      error,
    });
  }
});

export default app;
