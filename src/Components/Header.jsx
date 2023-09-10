import React from 'react';
import './Header.css'
import './AddNote.css'
function Header({handleToggleDarkMode}) {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=>handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)} className='save'>Toggle Mode</button>
        </div>
    );
}

export default Header;