import React, { useState } from 'react'
import Headers from './Components/Headers';
import CreateArea from './Components/CreateArea';
import Note from './Components/Note';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {

    if (!newNote.title && !newNote.contemt) {
      alert("Empty Fields")
    } else {
      setNotes(prevNotes => {

        return [...prevNotes, newNote];
      })

    }
}
  function deleteNote(id) {

    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Headers />
      <CreateArea onAdd={addNote} />
      {notes.map((item, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}

          />

        )
      })
      }


    </>
  );
}

export default App;
