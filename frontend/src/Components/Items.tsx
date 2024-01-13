import React from 'react';
import {Note} from '../Models/Interfaces';

export const NoteForm: React.FC<{
  addNoteClick: Function;
  title: string;
  description: string;
  setTitle: Function;
  setDescription: Function;
}> = ({ addNoteClick, title, description, setTitle, setDescription }) => (
  <form onSubmit={(event) => addNoteClick(event, title, description, setTitle, setDescription)}>
    <label htmlFor="titleInput">
      Title
      <input
        type="text"
        id="titleInput"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </label>
    <label htmlFor="descriptionInput">
      Description
      <textarea
        id="descriptionInput"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </label>
    <button type="submit">Add note</button>
  </form>
);


//Note

export const NoteList: React.FC<{ notes: Note[]; deleteNoteClick: Function; setNotes: Function }> = ({
  notes,
  deleteNoteClick,
  setNotes
}) => {
  notes.forEach((note, index) => (
    <div className="note" key={index}>
      <h2>Title:</h2>
      <p>{note.title}</p>
      <h2>Description:</h2>
      <p>{note.description}</p>
      <button onClick={(event) => deleteNoteClick(note.id, event, setNotes, notes)}>Delete</button>
    </div>
  ));
  return null;
};
