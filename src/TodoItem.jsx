import "./style.css";

export default function TodoItem({
  id,
  title,
  checked,
  deleteTodo,
  toggleTodo,
}) {
  function toggleThis() {
    toggleTodo(id);
  }
  return (
    <li>
      <label>
        <input
          type="checkbox"
          className="task-box"
          onChange={toggleThis}
          checked={checked}
        />
        <span className="todo-item">{title}</span>
      </label>
      <button onClick={() => deleteTodo(id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}
