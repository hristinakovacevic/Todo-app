import React from "react";
function Button(props) {
  return (
    <button type="submit" className="sub-btn">
      {props.name}
    </button>
  );
}
export default Button;
