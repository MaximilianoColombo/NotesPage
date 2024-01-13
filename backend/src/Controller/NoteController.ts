import { Request, Response } from 'express';
import { NoteService } from '../Service/noteService';
import { Note } from '../Domain/Note';

export class NoteController {
    noteService:NoteService

    constructor(noteService:NoteService){
        this.noteService=noteService
    }

    async create(req:Request,res:Response):Promise<Note>{
        console.log('NoteService in create method:', this.noteService)
        try {
            const { title, description } = req.body;

            console.log('Received request with body:', req.body);
            console.log(this.noteService)

            const note = await this.noteService.create(title, description);

            console.log('Created note:', note);

            res.status(201).json(note);
            return note
        } catch (error) {
            console.log(`noteController error: ${error}`)  
            res.status(500).json({ error: 'Internal Server Error' });
            throw error
        }
    }
}

/*This code is commented because it's not working, there is a problem in the line 20, the "this" is referencing a wrong class*/