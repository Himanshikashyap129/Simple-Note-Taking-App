import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import { saveNote, getNotes, updateNote, deleteNote } from './services/localStorageService';
import './styles.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const addNote = (note) => {
    saveNote(note);
    setNotes(getNotes());
  };

  const editNote = (updatedNote) => {
    updateNote(updatedNote);
    setNotes(getNotes());
  };

  const deleteNoteById = (id) => {
    deleteNote(id);
    setNotes(getNotes());
  };

  const clearEdit = () => {
    setNoteToEdit(null);
  };

  return (
    <div className="app">
      <h1>Simple Note Taking App</h1>
      <NoteForm addNote={addNote} editNote={editNote} noteToEdit={noteToEdit} clearEdit={clearEdit} />
      <NotesList notes={notes} onEdit={setNoteToEdit} onDelete={deleteNoteById} />
    </div>
  );
};

export default App;
