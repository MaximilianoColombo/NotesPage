import { PrismaClient } from "@prisma/client";
import { Note } from "../Domain/Note";

export class NoteRepository { //Create a repository class
    prisma: PrismaClient;

    constructor (prisma:PrismaClient){
        this.prisma=prisma
    }

    async save (title:string,description:string):Promise<Note>{ //Create a method that returns an object of Note type
        try {
            const createdNote:Note = await this.prisma.note.create({/*Create an object with the values */
                data: {title:title, description:description }
                
            })
            console.log(`noteRepository created: ${createdNote}`)
            
        return createdNote   
        } catch (error) {
            console.log(`noteRepository error: ${error}`)   
            
            throw error
        }
        
        
    }
    async delete(id: number): Promise<void>{
        try {
            await this.prisma.note.delete({
                where:{id:id}
            })
            console.log(`Note with ID ${id} was deleted`);
        } catch (error) {
            console.error("Error deleting the note", error)
        }
    }
}

