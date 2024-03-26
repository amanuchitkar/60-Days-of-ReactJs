import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    // console.log("hello button clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert text to Upper case successfully","success")
  };
  const handlelowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert text to lower case successfully","success")
  }; 
  const emailextrac = () => {
    let email = text.split("@");
    setText(email[0]);
    props.showAlert("Extract Email successfully","success")
  };
  const dowtext = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "down.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 0);
    props.showAlert("Extract Email successfully","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearAll=()=>{
    setText("")
    props.showAlert("Clear all text successfully","success")

  };
  
  // setText("kfdljsajf");
  return (
    <>
      <div>
        <div className="container mt-4" style={{color:props.mode==="dark" ? "white":"black"}}>
          <h2>{props.heading}</h2>
          <label htmlFor="mytext" className="form-label">
            Example textarea
          </label>
          <textarea
            className={`form-control bg-${props.mode}`}
            value={text}
            onChange={handleOnChange}
            id="mytext"
            style={{color:props.mode==="dark" ? "white":"black"}}
            rows="3"
          ></textarea>
          <button className="btn btn-primary  m-3 " disabled={text.length===0}style={{backgroundColor:props.mode==="dark"?"#353a3f":"#dfdfdf",border:"1px solid black",color:props.mode==="light"?"#353a3f":"#dfdfdf"}} onClick={handleupclick}>
            Convert upper case
          </button>
          <button className="btn btn-primary m-3" disabled={text.length===0} style={{backgroundColor:props.mode==="dark"?"#353a3f":"#dfdfdf",border:"1px solid black",color:props.mode==="light"?"#353a3f":"#dfdfdf"}} onClick={handlelowclick}>
            Convert lower case
          </button>
          <button className="btn btn-primary m-3" disabled={text.length===0} style={{backgroundColor:props.mode==="dark"?"#353a3f":"#dfdfdf",border:"1px solid black",color:props.mode==="light"?"#353a3f":"#dfdfdf"}} onClick={emailextrac}>
            email extractor
          </button>
          <button className="btn btn-primary m-3" disabled={text.length===0} style={{backgroundColor:props.mode==="dark"?"#353a3f":"#dfdfdf",border:"1px solid black",color:props.mode==="light"?"#353a3f":"#dfdfdf"}} onClick={dowtext}>
            Download text
          </button>
          <button className="btn btn-primary m-3" disabled={text.length===0} style={{backgroundColor:props.mode==="dark"?"#353a3f":"#dfdfdf",border:"1px solid black",color:props.mode==="light"?"#353a3f":"#dfdfdf"}} onClick={clearAll}>
            Clear All text
          </button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==="dark" ? "white":"black"}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Charachter
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Somting to Preview it"}</p>
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
