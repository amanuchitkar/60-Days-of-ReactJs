import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { notes, addNote} = context;

  return (
    <>
    <div>
    <AddNote/>
    </div>
    <div className="row my-3">
      <h2 className="m-2">Your Notes</h2>
      {notes.map((note) => {
          return <NoteItem key={note._id} note={note} addNote={addNote} />;
        })}
    </div>
        </>
  );
};

export default Notes;
