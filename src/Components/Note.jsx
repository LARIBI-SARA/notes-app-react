import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './Note.css';

function Note({ id, text,  date, color,handleDeleteNote }) {
  const noteStyle = {
    backgroundColor: color, 
  };

  return (
    <div className='note' style={noteStyle}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
}

export default Note;
