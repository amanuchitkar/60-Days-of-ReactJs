import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
const Home = () => {
  const context=useContext(NoteContext);
  const {notes,setNotes}=context;
  return <div>
    <div className="container">
    <h2>Add a Notes</h2>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    
    <h2>Your Notes</h2>
    {notes.map((note)=>{
      return note.title;
    
    })}
    </div>;
};

export default Home;
