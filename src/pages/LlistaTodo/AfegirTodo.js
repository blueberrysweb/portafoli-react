import { useRef } from "react";
import { postNewTodo } from "./todosApi";

export function AfegirTodo(onTodoAdded) {
  const titleRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        titleRef.current.value = "";
        postNewTodo(title).then((json) => onTodoAdded(json));
      }}
    >
      <input ref={titleRef} />
      <input type="submit" value="Afegir" />
    </form>
  );
}
