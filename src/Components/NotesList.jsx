import React from 'react';
import Note from './Note';
import './NotesList.css'
import AddNote  from './AddNote';
function NotesList({notes,handleAddNote,handleDeleteNote}) {

    
    return(
        <div className='notes-list'>
        {
          notes.map((note) =>(
          <Note key={note.id}
           id={note.id}
           text={note.text}
           date={note.date}
           color={note.color}
           handleDeleteNote={handleDeleteNote}
           />))  
          
        }
        <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}
export default NotesList;