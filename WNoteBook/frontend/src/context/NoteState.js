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
    console.log("Adding a note");
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzYTgxODUxNmYwMDZkYjYwMzYzYTRjIn0sImlhdCI6MTcxNTI0NjkyMX0.k93MQxIBls2oIqRvSYnNQPxN3ku9nZeCp8mviNdFtdg"
      },
      body: JSON.stringify({title,description,tag}),
    });
    
    
    const note = {
      _id: "663f363ea090fadssd1db6be416be",
      user: "663a818516f006ddfdb60363a4c",
      title: title,
      description: description,
      tag: tag,
      date: "2024-05-11T09:11:26.646Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    return response.json();
  };
  //Edit a note
  const editNote = async (id, title, description, tag = "defult") => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzYTgxODUxNmYwMDZkYjYwMzYzYTRjIn0sImlhdCI6MTcxNTI0NjkyMX0.k93MQxIBls2oIqRvSYnNQPxN3ku9nZeCp8mviNdFtdg",
      },
      body: JSON.stringify({title,description,tag}),
    });
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
    console.log("deleting a note");
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
