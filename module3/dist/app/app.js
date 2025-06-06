"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_router_1 = require("./todos/todos.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", todos_router_1.toDosRouter);
app.get("/", (req, res) => {
    res.send("Welcome to todo app website!!");
});
exports.default = app;
