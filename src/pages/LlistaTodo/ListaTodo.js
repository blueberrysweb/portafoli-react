import { useEffect, useState } from "react";
import { getTodos } from "./todosApi";
import "./llistatodo.css";
import { AfegirTodo } from "./AfegirTodo";
import { Todollist } from "./Todollist";
import {
  REPLACE_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  replaceTodos,
  addTodo,
  updateTodo,
} from "./actions";

const initialState = [];

function reduceTodos(state = initialState, action) {
  switch (action.type) {
    case REPLACE_TODOS:
      return action.todos;
    case ADD_TODO:
      return [...state, action.todo];
    case UPDATE_TODO:
      return state.map((currentTodo) =>
        currentTodo.id === action.todo.id ? action.todo : currentTodo
      );
    default:
      return state;
  }
}

export default function ListTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
    const intervaLID = setInterval(() => loadTodos(), 6000);
    return () => clearInterval(intervaLID);
  }, []);

  const loadTodos = () =>
    getTodos().then((allTodos) =>
      setTodos(reduceTodos(todos, replaceTodos(allTodos)))
    );

  const onTodoAded = (todo) => setTodos(reduceTodos(todos, addTodo(todo)));
  const onTodoUpdated = (updatedTodo) =>
    setTodos(reduceTodos(todos, updateTodo(updatedTodo)));

  return (
    <>
      <div>
        <h1>Lista de todos</h1>
        <button onClick={loadTodos}>Refresh</button>
        <Todollist todos={todos} onUpdated={onTodoUpdated} />
        <AfegirTodo onTodoAdded={onTodoAded} />
      </div>
    </>
  );
}
