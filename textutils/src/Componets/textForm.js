import React, {useState} from "react";
import PropTypes from 'prop-types';


export default function TextForm(props) {
  const handleupclick=()=> {
    console.log("hello button clicked"+text);
    let newText=text.toUpperCase()
    setText(newText);
  }
  const handleOnChange=(event)=> {
    
    
    setText(event.target.value);
  }
  const [text,setText]=useState("");
  // setText("kfdljsajf");
  return (
    <div>
      <div className="container mt-4">
        <h2>{props.heading}</h2>
        <label htmlFor="mytext" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="mytext" value={text} onChange={handleOnChange} rows="3"></textarea>
        <button className="btn btn-primary mt-3" onClick={handleupclick}>Convert upper case</button>
      </div>

    </div>
  );
}
TextForm.propTypes={
  heading:PropTypes.string.isRequired
}
TextForm.defaultProps={
  heading:"enter value"
}