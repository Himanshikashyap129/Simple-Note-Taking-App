import React, { useState, useEffect } from 'react';

const NoteForm = ({ addNote, editNote, noteToEdit, clearEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteToEdit) {
      editNote({
        ...noteToEdit,
        title,
        content,
        timestamp: new Date().toLocaleString()
      });
      clearEdit();
    } else {
      addNote({
        id: Date.now(),
        title,
        content,
        timestamp: new Date().toLocaleString()
      });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
      {noteToEdit && <button type="button" onClick={clearEdit}>Cancel</button>}
    </form>
  );
};

export default NoteForm;
