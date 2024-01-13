import React, { useState } from 'react';
import {Note} from '../Models/Interfaces'
import {deleteNoteClick,addNoteClick} from '../Functions/Events'
import {NoteForm,NoteList} from '../Components/Items'


// Page component
const NotePage = () => {
  // Initialize values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState<Note[]>([]);

  

  // Insert the HTML
  return (
    <div className='container'>
      <NoteForm addNoteClick={addNoteClick} title={title} description={description} setTitle={setTitle} setDescription={setDescription}/>
      <NoteList notes={notes} deleteNoteClick={deleteNoteClick} setNotes={setNotes}/>
    </div>
  );
};

export default NotePage;
