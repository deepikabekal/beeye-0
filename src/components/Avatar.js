import React from "react";

function Avatar(props) {
    return (
      <img
        className={props.className}
        src={require(`../assets/images/${props.imageName}`).default}
        alt={props.altValue}
      />
    );
  }
  
  export default Avatar;
  