import { useEffect, useState } from "react";
import { getTodos } from "./todosApi";
import "./llistatodo.css";
import { AfegirTodo } from "./AfegirTodo";
import { TodoItem } from "./TodoItem";

export const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

export default function ListTodo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then(setTodos);

    const intervaLID = setInterval(() => {
      getTodos().then(setTodos);
    }, 1500);
    return () => clearInterval(intervaLID);
  }, []);
  return (
    <>
      <div>
        <h1>Lista de todos</h1>
        <button onClick={() => getTodos().then(setTodos)}>Refresh</button>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdated={(updatedTodo) =>
                setTodos(
                  todos.map((currentTodo) =>
                    currentTodo.id === updatedTodo.id
                      ? updatedTodo
                      : currentTodo
                  )
                )
              }
            />
          ))}
        </ul>
        <AfegirTodo onTodoAdded={(todo) => setTodos([...todos, todo])} />
      </div>
    </>
  );
}
