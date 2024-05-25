import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteItem = (props) => {
    const{deleteNote} = useContext(NoteContext)
  const { note ,updateNote} = props;
  return (
    <div className="col-md-4">
      <div className="card m-2">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h4>{note.title}</h4>
          <div>

            <i className="fa-solid fa-trash-can mx-2 " onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> {note.description}</p>
            <footer className="blockquote-footer">
              {note.date} <cite title="Source Title">{note.tag}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
