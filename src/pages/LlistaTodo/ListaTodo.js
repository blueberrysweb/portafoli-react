import { useEffect, useReducer } from "react";
import { AfegirTodo } from "./AfegirTodo";
import {
  replaceTodos,
  addTodo,
  updateTodo,
} from "./actions";
import { Todollist } from "./Todollist";
import { getTodos } from "./todosApi";
import "./llistatodo.css";
import { initialState, reduceTodos } from "./reducers";

export default function ListTodo() {
  const [todos, dispatch] = useReducer(reduceTodos, initialState);

  useEffect(() => {
    loadTodos();
    const intervaLID = setInterval(() => loadTodos(), 6000);
    return () => clearInterval(intervaLID);
  }, []);


  const loadTodos = () =>
    getTodos().then((all) => dispatch(replaceTodos(all)));

  const onTodoAded = (todo) => dispatch(addTodo(todo));
  
  const onTodoUpdated = (todo) =>
    dispatch(updateTodo(todo));

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
