import React, { useContext, useEffect, useRef} from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
// import EditNote from "./EditNote";

const Notes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { notes, addNote,fetchAllNotes} = context;
useEffect(()=>{
  fetchAllNotes()
  // eslint-disable-next-line
},[])
const ref=useRef(null)

const updateNotes = (note)=>{
   ref.current.click()
  // return alert(note)
}
  

  return (
    <>
    <div>
    {/* <EditNote/> */}
    <AddNote/>

<button ref={ref} type="button" className="btn btn-primary" style={{display:"none"}}data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="51" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="row my-3">
      <h2 className="m-2">Your Notes</h2>
      {notes.map((note) => {
          return <NoteItem key={note._id} note={note} addNote={addNote} updateNotes={updateNotes} />;
        })}
    </div>
        </>
  );
};

export default Notes;
