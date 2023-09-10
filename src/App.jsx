import React, { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const getRandomColor = () => {
    const colors = [
      "#ff7eb9",
      "#feff9c",
      "#7afcff",
      "#ff65a3",
      "#fff740",
      "#FFDBC3",
      "#9F91CC",
      "#5C4B99",
      "#3D246C",
      "#8D8DAA",
      "#DFDFDE",
      "#F7F5F2",
      "#F56D91",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const initialNotes = [
    {
      id: Math.floor(Math.random() * 10000),
      text: "This is my first note",
      date: "07/09/2023",
      color: getRandomColor(),
    },
    {
      id: Math.floor(Math.random() * 10000),
      text: "This is my second note",
      date: "08/09/2023",
      color: getRandomColor(),
    },
    {
      id: Math.floor(Math.random() * 10000),
      text: "This is my third note",
      date: "09/09/2023",
      color: getRandomColor(),
    },
  ];

  const [notes, setNotes] = useState(initialNotes);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      date: date.toLocaleDateString(),
      color: getRandomColor(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const nonDeleted = notes.filter((note) => note.id !== id);
    setNotes(nonDeleted);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
