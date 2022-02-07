import React from "react";

function ToDoItems(props) {
  function handleClick() {
    props.onChecked(props.id);
  }

  return <li onClick={handleClick}>{props.item}</li>;
}

export default ToDoItems;
