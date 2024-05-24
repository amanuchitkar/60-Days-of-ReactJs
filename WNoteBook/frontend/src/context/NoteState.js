
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
 const notesInitial = [{
    "_id": "663e19936ed2f2de62f2ed3e",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi book",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdklsjaggfsfhdhfkdasfkjdsakjfkldasjfkldjasklfjdklasjfkldasjfkldsjaklfdjsaklfjdklasjfkladjfkldjsfkljdsakljfiuityiojlkanfknafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-10T12:56:51.070Z",
    "__v": 0
  },
  {
    "_id": "663f363ea090a1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090a1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090a1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090a1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
  ,
  {
    "_id": "663f363ea090a1db6be416be",
    "user": "663a818516f006db60363a4c",
    "title": "aman kfdi bdfook",
    "description": "dfkasfjdklsjafkldjsaklfjdklsjaflkdsjaklfjdklasjfkldsjajfkljdsaklfjjdsklajfdfdkfdlsjafkldjsafkljdklvlncnbeeritoert09676203iokgfdgklsfhio",
    "tag": "personal",
    "date": "2024-05-11T09:11:26.646Z",
    "__v": 0
  }
]
  const [notes,setNotes]=useState(notesInitial);
  // eslint-disable-next-line
  return (
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
