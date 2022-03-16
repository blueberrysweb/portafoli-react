import Condicionesdeuso from "./legal/Condiciones-de-uso";
import Conocenos from "./Conocenos";
import Comofunciona from "./contact/Como-funciona";
import Contacto from "./contact/Contacto";
import Reglaspublicacion from "./soporte/Reglas-publicacion";
import Preguntasfrecuentes from "./soporte/Preguntas-frecuentes";
import Todolist from "./TodoList";
import Counter from "./Counter";

export const llista = [
  {
    path: "condicionesdeuso",
    titol: "Condiciones de uso",
    element: <Condicionesdeuso />,
  },
  {
    path: "todolist",
    titol: "Todo List",
    element: <Todolist />,
  },
  {
    path: "counter",
    titol: "Counter",
    element: <Counter />,
  },
];

export const llistafooter = [
  { path: "conocenos", titol: "Conocenos", element: <Conocenos /> },
  { path: "comofunciona", titol: "Como funciona", element: <Comofunciona /> },
  { path: "contacto", titol: "Contacto", element: <Contacto /> },
];

export const llistaSoporte = [
  {
    path: "reglaspublicacion",
    titol: "Reglas de publicación",
    element: <Reglaspublicacion />,
  },
  {
    path: "preguntasfrecuentes",
    titol: "Preguntas frecuentes",
    element: <Preguntasfrecuentes />,
  },
];
export const llistaLegal = [
  {
    path: "condicionesdeuso",
    titol: "Condiciones de uso",
    element: <Condicionesdeuso />,
  },
  { path: "comofunciona", titol: "Como funciona", element: <Comofunciona /> },
];
