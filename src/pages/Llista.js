import Condicionesdeuso from "./legal/Condiciones-de-uso";
import Conocenos from "./Conocenos";
import Comofunciona from "./contact/Como-funciona";
import Contacto from "./contact/Contacto";
import Reglaspublicacion from "./soporte/Reglas-publicacion";
import Preguntasfrecuentes from "./soporte/Preguntas-frecuentes";
import Todolist from "./TodoList";
import Counter from "./Counter";
import ListTodo from "./LlistaTodo/ListaTodo";
import  Galeria  from "./Galeria";
import Calculadora from "./Calculadora";
import Acordio from "./Acordio";
import ToggleButton from "./ToggleButton";
import Vector from "./vector";
import Comptador from "./Comptador";

export const llista = [
  {
    path: "galeria",
    titol: "Galeria",
    element: <Galeria />,
  },
  {
    path: "togglrbutton",
    titol: "Toggle Button",
    element: <ToggleButton />,
  },
  {
    path: "comptador",
    titol: "Comptador",
    element: <Comptador />,
  },
  {
    path: "acordio",
    titol: "Acordio",
    element: <Acordio />,
  },
  {
    path: "calculadora",
    titol: "Calculadora",
    element: <Calculadora />,
  },
  {
    path: "todolist",
    titol: "Todo List",
    element: <Todolist />,
  },
  {
    path: "listatodo",
    titol: "Lista Todo",
    element: <ListTodo />,
  },
  {
    path: "counter",
    titol: "Counter",
    element: <Counter />,
  },
  {
    path: "vectors",
    titol: "Exer Vectors",
    element: <Vector />,
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
