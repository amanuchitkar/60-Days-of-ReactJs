import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
};

export default Notes;
