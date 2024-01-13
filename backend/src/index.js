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
const express_1 = __importDefault(require("express")); /*Import the required libraries*/
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const noteRepository_1 = require("./Repository/noteRepository");
const noteService_1 = require("./Service/noteService");
//import { NoteController } from "./Controller/NoteController";
require('dotenv').config();
var app = (0, express_1.default)(); /*Create an express app*/
const prisma = new client_1.PrismaClient(); /*Initialize the prisma client*/
const repository = new noteRepository_1.NoteRepository(prisma);
const service = new noteService_1.NoteService(repository);
//const controller = new NoteController(service)
app.use(express_1.default.json()); /*Manage JSON data*/
app.use((0, cors_1.default)()); /*Implement CORS*/
app.listen(5000, () => {
    console.log("server running on localhost:5000"); /*Start the server on a local port*/
});
//GET TEST
app.get("/notes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield prisma.note.findMany();
    res.json(notes);
}));
/*-----------------POST ENDPOINT (add notes)-------------*/
app.post("/notes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const note = yield service.create(title, description);
        res.status(201).json(note);
        return note;
    }
    catch (error) {
        console.log(error);
    }
}));
//-------------DELETE ENDPOINT----------------
app.delete("/notes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const noteId = parseInt(req.params.id, 10);
        yield service.delete(noteId);
        res.status(204).send();
    }
    catch (error) {
        console.error(`Error deleting note: ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
//POST test controller
//app.post("/notes",controller.create)
//app.post("/notes", (req, res) => {controller.create(req, res)})
