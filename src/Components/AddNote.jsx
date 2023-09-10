import React, {useState} from 'react';
import './Note.css'
import './AddNote.css'
function AddNote({handleAddNote}) {
    const caracterLimit=200;
    const [noteText,setNoteText ]= useState('')

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if(caracterLimit - inputValue.length >= 0){
            setNoteText(inputValue)
        }
        
    }
    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            /* si on supprime les espaces 
             existant avant une lettre et 
             il reste encore de chars  */
            handleAddNote(noteText)
            setNoteText('') /* pour que le texte deja ecrit 
            ne se réecrit pas encore une fois dans AddNote*/
        }
        
    }
    return (
        <div className='note new'>
            <textarea  
             cols="10"
              rows="8"
              value={noteText}
               placeholder='Type to add a new note'
               onChange={handleChange} >
               </textarea>
            <div className='note-footer'>
                <small>{caracterLimit - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;
