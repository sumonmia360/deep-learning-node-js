"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDosRouter = void 0;
const express_1 = __importDefault(require("express"));
const toDosRouter = express_1.default.Router();
exports.toDosRouter = toDosRouter;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
const AllToDoslData = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
toDosRouter.get("/all-todos", (req, res) => {
    res.json(AllToDoslData);
});
toDosRouter.get("/:title", (req, res) => {
    console.log(req.params);
});
toDosRouter.post("/create-todo", (req, res) => {
    console.log(req.body);
    res.send("Your ToDo was created!");
});
toDosRouter.patch("/:title", (req, res) => { });
toDosRouter.delete("/:title", (req, res) => { });
