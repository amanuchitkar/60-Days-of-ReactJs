
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
 const notesInitial = [{
    "_id": "663e19936ed2f2rde62f2ed3e",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi book",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdklsjaggfsfhdhfkdasfkjdsakjfkldasjfkldjasklfjdklasjfkldasjfkldsjaklfdjsaklfjdklasjfkladjfkldjsfkljdsakljfiuityiojlkanfknafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-10T12:56:51.070Z",
    "__v": 0
  },
  {
    "_id": "663f363ea090sa1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090ga1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090fa1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090a1db6be4f16be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090a1db6beg416be",
    "user": "663a818516f006db60363ah4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
]
  const [notes,setNotes]=useState(notesInitial);
  // eslint-disable-next-line
  //Add a note
  const addNote=(title,description,tag)=>{
    console.log("Adding a note")
    const note={
      "_id": "663f363ea090fadssd1db6be416be",
    "user": "663a818516f006ddfdb60363a4c",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
    setNotes(notes.concat(note))
  }
  //Edit a note
  const editNote=(id,title,description,tag="defult")=>{
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if(element._id===id){
        element.title=title
        element.description=description
        element.tag=tag
      }
      
    }
  }
  //Delete a note
  const deleteNote=(id)=>{
    console.log("deleting a note")
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)

  }
  return (
    <NoteContext.Provider value={{notes,deleteNote,addNote,editNote}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
