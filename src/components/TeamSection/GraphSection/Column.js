import React from "react";
import Button from "./Button";

function Column(props) {
  return (
    <div className="col-bar">
     <div className="bar"></div>
      <Button />
    </div>
  );
}

export default Column;