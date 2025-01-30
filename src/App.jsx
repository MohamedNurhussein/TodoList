import { useEffect, useState } from "react";
import TodoLogo from "./todoList.svg";
import Header from "./Header";
import TaskFrom from "./TaskForm";
import TaskList from "./TaskList";
import "./style.css";
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos == null) return [];
    return JSON.parse(savedTodos);
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log("todos: ", todos);

  function handleAdd(title) {
    //check not empty
    if (!title) return;
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: title, checked: false },
    ]);
  }

  function deleteTodo(id) {
    //remove item from list
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  }
  return (
    <>
      <Header TodoLogo={TodoLogo} />
      <TaskFrom handleAdd={handleAdd} />
      <TaskList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}
export default App;
