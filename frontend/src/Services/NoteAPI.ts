export class NoteAPI {
    constructor() {}

    static async addNote(noteData: { title: string; description: string }){
        try {
            const response = await fetch('http://localhost:5000/notes',{
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(noteData),
            })
            console.log('Request completed',response)

            if (!response.ok)
                throw new Error(`Error retrieving the note: ${response.statusText}`)

            const nota = await response.json()
            return nota
        } catch (error) {
            console.error('Error retrieving the note:', error)
            throw error
        }
        
    }

    static async deleteNote(id:number){
        try {
            const response = await fetch (`http://localhost:5000/notes/${id}`,{
                method: "DELETE",
            })
            console.log('Request completed',response)
            if (!response.ok)
                throw new Error(`Error deleting the note: ${response.statusText}`)
        } catch (error) {
            console.error("Error deleting the note", error)
        }
    }
}