import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header"><h4>{note.title}</h4></div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> {note.description}</p>
            <footer className="blockquote-footer">
              {note.date} <cite title="Source Title">{note.tag}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <br />
    </div>
  );
};

export default NoteItem;
