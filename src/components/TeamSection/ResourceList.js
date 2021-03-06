import React from "react";
import Avatar from "../Avatar";

function ResourceList(props) {
  
  return (    
    <div className="resource-list-div div-border">
      <div className="resource-img-div">
        <Avatar imageName={props.imageName} />
        {/* <img src={require(`../../assets/images/${props.imageName}`).default} alt="employee of the company" /> */}
      </div>
      <div className="resource-info-div">
        <p className="resource-p-tag">{props.employeeName}</p>
        <p className="resource-p-tag grayed-text">{props.designation}</p>
      </div>
    </div>
  );
}
//require(`../assets/images/${props.imgName}`
export default ResourceList;
