import { TodoItem } from "./TodoItem";

export function Todollist({ todos, onUpdated }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdated={onUpdated} />
        ))}
      </ul>
    </>
  );
}
