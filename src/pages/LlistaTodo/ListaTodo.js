import { useEffect, useState } from "react";
import { getTodos } from "./todosApi";
import "./llistatodo.css";
import { AfegirTodo } from "./AfegirTodo";
import { Todollist } from "./Todollist";

export default function ListTodo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then(setTodos);

    const intervaLID = setInterval(() => {
      getTodos().then(setTodos);
    }, 1500);
    return () => clearInterval(intervaLID);
  }, []);
  const onTodoAded = (todo) => setTodos([...todos, todo]);
  return (
    <>
      <div>
        <h1>Lista de todos</h1>
        <button onClick={() => getTodos().then(setTodos)}>Refresh</button>
        <Todollist todos={todos} onUpdated={onTodoUpdated(setTodos, todos)} />
        <AfegirTodo onTodoAdded={onTodoAded} />
      </div>
    </>
  );
}
function onTodoUpdated(setTodos, todos) {
  return (updatedTodo) =>
    setTodos(
      todos.map((currentTodo) =>
        currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo
      )
    );
}
