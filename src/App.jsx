import React from "react";
import "./App.css"
import InputArea from "./components/InputArea";
import ToDoItems from "./components/ToDoItems";

function App() {
  const [items, setItems] = React.useState([]);

  function addItem(task, setTask) {
    setItems((prev) => {
      return [...prev, task];
    });
    setTask("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((elements, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((elements, index) => {
            return (
              <ToDoItems
                key={index}
                id={index}
                item={elements}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
