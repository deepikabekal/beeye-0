
function Avatar(props) {
    return (
      <img
        className={props.className}
        src={props.imageURL}
        alt={props.altValue}
      />
    );
  }
  
  export default Avatar;
  