import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
// import EditNote from "./EditNote";
const Notes = () => {
  const context = useContext(NoteContext);
  // eslint-disable-next-line
  const { notes, addNote, fetchAllNotes, editNote } = context;
  useEffect(() => {
    fetchAllNotes();
    // eslint-disable-next-line
  }, []);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentnote) => {
    ref.current.click();
    // return alert(note)
    setNote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescription: currentnote.description,
      etag: currentnote.tag,
    });
  };
  const handleClick = (e) => {
    // console.log("updating note: ", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    // addNote(note.title, note.description, note.tag);
  };
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        {/* <EditNote/> */}
        <AddNote />
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{ display: "none" }}
          ref={ref}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Edit Note
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      onChange={onchange}
                      value={note.etitle}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      onChange={onchange}
                      value={note.edescription}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      onChange={onchange}
                      value={note.etag}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  disabled={note.etitle.length<5 || note.edescription.length<5}
                  onClick={handleClick}
                  type="button"
                  className="btn btn-primary"
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2 className="m-2">Your Notes</h2>
        {notes.length === 0 && <p className="m-2">No Notes Display....</p>}
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              addNote={addNote}
              updateNote={updateNote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
