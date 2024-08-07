import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'

const AddNote = () => {
  const context = useContext(NoteContext)
  // eslint-disable-next-line
  const { addNote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })

  }
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (

    <div>
      <div className="container">
        <h2>Add a Notes</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              value={note.title}
              onChange={onchange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name='description'
              value={note.description}
              onChange={onchange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              value={note.tag}
              onChange={onchange}
            />
          </div>
          <button disabled={note.title.length<5 || note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
