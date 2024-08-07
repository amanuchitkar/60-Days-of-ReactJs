import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [  ];

  const [notes, setNotes] = useState(notesInitial);
  
  const fetchAllNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzYTgxODUxNmYwMDZkYjYwMzYzYTRjIn0sImlhdCI6MTcxNTI0NjkyMX0.k93MQxIBls2oIqRvSYnNQPxN3ku9nZeCp8mviNdFtdg"
      }
    });
    
    const json=await response.json();
    setNotes(json)
  };
  // eslint-disable-next-line
  //Add a note
  const addNote = async(title, description, tag) => {
    // console.log("Adding a note");
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzYTgxODUxNmYwMDZkYjYwMzYzYTRjIn0sImlhdCI6MTcxNTI0NjkyMX0.k93MQxIBls2oIqRvSYnNQPxN3ku9nZeCp8mviNdFtdg"
      },
      body: JSON.stringify({title,description,tag}),
    });
    
    
    const note=await response.json();
    setNotes(notes.concat(note));
  };
  //Edit a note
  const editNote = async (id, title, description, tag = "defult") => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzYTgxODUxNmYwMDZkYjYwMzYzYTRjIn0sImlhdCI6MTcxNTI0NjkyMX0.k93MQxIBls2oIqRvSYnNQPxN3ku9nZeCp8mviNdFtdg",
      },
      body: JSON.stringify({title,description,tag}),
    });
    let newNotes=JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
    return response.json();
  };

  //Delete a note
  const deleteNote = async(id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
     
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzYTgxODUxNmYwMDZkYjYwMzYzYTRjIn0sImlhdCI6MTcxNTI0NjkyMX0.k93MQxIBls2oIqRvSYnNQPxN3ku9nZeCp8mviNdFtdg",
      }})
    // console.log("deleting a note");
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, deleteNote, addNote, editNote,fetchAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
