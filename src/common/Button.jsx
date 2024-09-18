import React from "react";
function Button(props) {
  return (
    <button
      type={props.type}
      className={`sub-btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
export default Button;
/* color icon type name function  */
