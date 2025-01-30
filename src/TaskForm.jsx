import { useState } from "react";

export default function TaskFrom({ handleAdd }) {
  const [newItem, setNewItem] = useState("");
  //handle add
  function Add(e) {
    e.preventDefault();
    //add new item
    handleAdd(newItem);
    //clear input
    setNewItem("");
  }
  return (
    <form onSubmit={Add} className="new-item-form">
      <input
        value={newItem}
        onInput={(e) => setNewItem(e.target.value)}
        type="text"
        className="task-input"
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
