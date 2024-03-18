import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("hello button clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const emailextrac = () => {
    let email = text.split("@");
    setText(email[0]);
  };
  const dowtext = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "down.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 0);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("kfdljsajf");
  return (
    <>
      <div>
        <div className="container mt-4">
          <h2>{props.heading}</h2>
          <label htmlFor="mytext" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="mytext"
            value={text}
            onChange={handleOnChange}
            rows="3"
            style={{backgroundColor:props.mode==='dark'?'black':'white'}}
          ></textarea>
          <button className="btn btn-primary m-3" onClick={handleupclick}>
            Convert upper case
          </button>
          <button className="btn btn-primary m-3" onClick={handlelowclick}>
            Convert lower case
          </button>
          <button className="btn btn-primary m-3" onClick={emailextrac}>
            email extractor
          </button>
          <button className="btn btn-primary m-3" onClick={dowtext}>
            Download text
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} Charachter
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "enter value",
};
