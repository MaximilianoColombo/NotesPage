import { NoteAPI } from "../Services/NoteAPI";
import {Note} from '../Models/Interfaces'



export const deleteNoteClick = async (id:number,event:React.FormEvent,setNotes:Function,notes:Note[]) => {
    event.preventDefault()
    try {
        await NoteAPI.deleteNote(id);

        // Update the state by filtering out the deleted note
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);

        console.log(`Note with ID ${id} deleted from state`);
    } catch (error) {
        console.error("Error deleting note", error);
    }
};

// Function to handle form submission
export const addNoteClick = async (event:React.FormEvent,title:string, description:string, setTitle:Function, setDescription:Function, setNotes:Function) => {
    event.preventDefault();

    try {
      // Call the static addNote method of the NoteAPI class
      const newNote = await NoteAPI.addNote({
        title: title,
        description: description,
      });

      // Update the state with the new note
      setNotes((prevNotes:Note[]) => [...prevNotes, newNote]);

      // Clear the form after adding the note
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };