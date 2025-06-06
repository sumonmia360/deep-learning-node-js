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
exports.toDosRouter = void 0;
const express_1 = __importDefault(require("express"));
const toDosRouter = express_1.default.Router();
exports.toDosRouter = toDosRouter;
const mongoDB_1 = require("../../config/mongoDB");
const mongodb_1 = require("mongodb");
toDosRouter.get("/all-todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const DB = yield mongoDB_1.client.db("toDosDB");
    const dbData = yield DB.collection("toDos").find({}).toArray();
    res.json(dbData);
}));
toDosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const DB = yield mongoDB_1.client.db("toDosDB");
    const dbData = yield DB.collection("toDos").findOne({
        _id: new mongodb_1.ObjectId(id),
    });
    res.json(dbData);
}));
toDosRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, prority, isCompleted } = req.body;
    const DB = yield mongoDB_1.client.db("toDosDB");
    const dbCollection = yield DB.collection("toDos").insertOne({
        title: title,
        description: description,
        prority: prority,
        isCompleted: isCompleted,
    });
    res.send(dbCollection);
}));
toDosRouter.put("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, description, prority, isCompleted } = req.body;
    const db = yield mongoDB_1.client.db("toDosDB");
    const conllection = yield db.collection("toDos");
    const updateData = yield conllection.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { title, description, prority, isCompleted } }, { upsert: true });
    res.json(updateData);
}));
toDosRouter.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongoDB_1.client.db("toDosDB");
    const collection = yield db.collection("toDos");
    const deleteOne = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(deleteOne);
}));
