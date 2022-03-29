import { ENDPOINT } from "./ListaTodo";

export function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
}
export function postNewTodo(title) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      title: title,
    }),
  }).then((response) => response.json());
}
export function postUpdateTodo(todo) {
  return fetch(`${ENDPOINT}/${todo.id}`, {
    method: "POST",
    body: JSON.stringify({ completed: !todo.completed }),
  }).then((response) => response.json());
}
