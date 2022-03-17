import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, eliminartask, reset } from "./redux/actions/todoActions";

export default function Todolist() {
  const [checked, setChecked] = useState("all");

  const content = useSelector((store) => store.todoReducer);
  const dispatchTodo = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    dispatchTodo(addtask(event.target.task.value));
  };

  return (
    <div className="App">
      <label>All</label>
      <input
        type="checkbox"
        checked={checked === "all"}
        onClick={() => setChecked("all")}
      ></input>
      <label>DONE</label>
      <input
        type="checkbox"
        checked={checked === "done"}
        onClick={() => setChecked("done")}
      ></input>
      <label>TODO</label>
      <input
        type="checkbox"
        checked={checked === "todo"}
        onClick={() => setChecked("todo")}
      ></input>

      <form onSubmit={formSubmit}>
        <input name="task" />
        <button type="submit" onChange={() => {}}>
          add
        </button>
      </form>
      <ul>
        {content
          .filter((t) =>
            checked === "all"
              ? true
              : checked === "done"
              ? t.done === true
              : t.done === false
          )
          .map((taska) => {
            return (
              <li key={taska.content}>
                {taska.content}
                {taska.done === true ? "DONE" : "TODO"}
                <button onClick={() => dispatchTodo(eliminartask(taska))}>
                  Eliminar
                </button>
              </li>
            );
          })}
      </ul>
      <button onClick={() => dispatchTodo(reset())}>RESET</button>
    </div>
  );
}
