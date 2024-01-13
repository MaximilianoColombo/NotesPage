import express from "express"; /*Import the required libraries*/
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { NoteRepository } from "./Repository/noteRepository";
import { NoteService } from "./Service/noteService";
//import { NoteController } from "./Controller/NoteController";

require('dotenv').config();
var app = express(); /*Create an express app*/

const prisma = new PrismaClient(); /*Initialize the prisma client*/
const repository = new NoteRepository(prisma)
const service = new NoteService(repository)
//const controller = new NoteController(service)

app.use(express.json()); /*Manage JSON data*/
app.use(cors()); /*Implement CORS*/

app.listen(5000, () => {
  console.log("server running on localhost:5000"); /*Start the server on a local port*/
});

//GET TEST
app.get("/notes", async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

/*-----------------POST ENDPOINT (add notes)-------------*/
app.post("/notes",async (req,res) => {
  try {
    const { title, description } = req.body;
    const note = await service.create(title,description)
    res.status(201).json(note);
    return note
  } catch (error) {
    console.log(error)
  }
})

//-------------DELETE ENDPOINT----------------
app.delete("/notes/:id", async (req, res) => {
  try {
    const noteId = parseInt(req.params.id, 10);

    await service.delete(noteId);

    res.status(204).send();
  } catch (error) {
    console.error(`Error deleting note: ${error}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//POST test controller
//app.post("/notes",controller.create)
//app.post("/notes", (req, res) => {controller.create(req, res)})

