export const saveNote = (note) => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const getNotes = () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  };
  
  export const updateNote = (updatedNote) => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.map(note => note.id === updatedNote.id ? updatedNote : note);
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  
  export const deleteNote = (id) => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(notes));
  };
  