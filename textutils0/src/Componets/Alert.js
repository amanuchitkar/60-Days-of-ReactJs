// rfce
// import PropTypes from "prop-types";

import React from "react";

function Alert(props) {
  const Capitelized = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{height:'5rem'}}>


    {props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          >
          <strong>{Capitelized(props.alert.type)}!</strong> {props.alert.msg}

          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      </div>
    )}
    </div>
  );
}

export default Alert;
