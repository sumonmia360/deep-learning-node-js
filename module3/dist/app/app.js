"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_router_1 = require("./todos/todos.router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", todos_router_1.toDosRouter);
app.get("/", (req, res, next) => {
    res.send("WelCome to My todo app");
});
app.get("/error", (req, res, next) => {
    console.log("Custom middleware checking in cli");
    next();
}, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(error);
}));
app.use((req, res, next) => {
    res.status(404).json({ message: "This Page is Not found" });
});
app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({
            message: "This Error handeling by express global error handaling ",
            error,
        });
    }
});
exports.default = app;
