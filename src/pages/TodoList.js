import { useDispatch, useSelector } from "react-redux";
import {
  addList,
  clearList,
  clearTask,
  doneTask,
  undoTask,
} from "./redux/actions/todoActions";
import { useState, useEffect } from "react";
export default function TodoList() {
  const lista = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [listStatus, setListStatus] = useState("ALL");
  console.log("listStatus", listStatus);
  return (
    <>
      <div>
        {/*   <input
          onClick={() => setListStatus("ALL")}
          type="radio"
          name="listStatus"
          value="ALL"
        />
        ALL
        <input
          onClick={() => setListStatus("DONE")}
          type="radio"
          name="listStatus"
          value="DONE"
        />
        DONE
        <input
          onClick={() => setListStatus("TODO")}
          type="radio"
          name="listStatus"
          value="TODO"
        />
        TODO*/}
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={() => dispatch(addList(task))}>add</button>
        <button onClick={() => dispatch(clearList())}>reset</button>
        <ul>
          {lista.map((x, i) => (
            <li
              className={
                "grid grid-cols-6 gap-4 " +
                (listStatus === "ALL"
                  ? ""
                  : listStatus === "DONE" && x.done === true
                  ? ""
                  : listStatus === "TODO" && x.done === false
                  ? ""
                  : " hidden")
              }
              key={i}
            >
              <label> {x.task}</label>
              <label className>DONE</label>
              <input
                className=""
                type="checkbox"
                title="task"
                onChange={() => dispatch(doneTask(i))}
              />
              <label className>UNDO</label>
              <input
                className=""
                type="checkbox"
                title="task"
                onChange={() => dispatch(undoTask(i))}
              />

              <button onClick={() => dispatch(clearTask(i))}>🗑</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
