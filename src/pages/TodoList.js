import { useDispatch, useSelector } from "react-redux";
import { addtask, eliminartask } from "./redux/actions/todoActions";

export default function Todolist() {
  const content = useSelector((store) => store.todoReducer);
  const dispatchTodo = useDispatch();

  const formSubmit = (event) => {
    event.preventDefault();
    dispatchTodo(addtask(event.target.task.value));
  };
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <input name="task" />
        <button type="submit">add</button>
      </form>
      <ul>
        {content.map((taska) => {
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
    </div>
  );
}
