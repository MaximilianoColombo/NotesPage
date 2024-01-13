import { Note } from "../Domain/Note";
import { NoteRepository } from "../Repository/noteRepository";

export class NoteService{
    repository:NoteRepository

    constructor(repository:NoteRepository){
        this.repository=repository
    }
    async create(title:string,description:string): Promise<Note>{
        
        try {
            const result= await this.repository.save(title,description)
            const note= new Note(result.id,result.title,result.description)
            console.log(`noteService created: ${note}`)
            return note
        } catch (error) {
            console.log(`noteService error: ${error}`)   
            throw error
        }   
    }
    async delete(id: number): Promise<void> {
        try {
            await this.repository.delete(id);
        } catch (error) {
            console.error(`Error deleting note with ID ${id}: ${error}`);
            throw error;
        }
    }
    
}