import React, { useContext, useEffect, useRef} from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { notes, addNote,fetchAllNotes} = context;
useEffect(()=>{
  fetchAllNotes()
  // eslint-disable-next-line
},[])

const ref = useRef(null);

const updateNote = (ref) => {

  ref.current.click();
  // ref.toggle();
};
  return (
    <>
    <div>
    <AddNote/>
    </div>
    <div className="row my-3">
      <h2 className="m-2">Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} addNote={addNote} updateNote={updateNote}/>;
      })}
    </div>
    <div>
    <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="ref#exampleModal"
        
        ref={ref}
        >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        </>
  );
};

export default Notes;
