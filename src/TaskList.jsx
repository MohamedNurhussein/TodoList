import TodoItem from "./TodoItem";
import "./style.css";

export default function TaskList({ todos, deleteTodo, toggleTodo }) {
  return (
    <ul className="item-list">
      {todos.length == 0 && "No Todos"}
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>;
      })}
    </ul>
  );
}
