import React, {usestate} from "react";
import PropTypes from 'prop-types';

const [text,settext]=usestate("Enter your text here.")

export default function TextForm(props) {
  return (
    <div>
      <div className="container mt-4">
        <h2>{props.heading}</h2>
        <label htmlFor="mytext" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="mytext" rows="3"></textarea>
        <button className="btn btn-primary mt-3">Convert upper case</button>
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