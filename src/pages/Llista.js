import Condicionesdeuso from "./legal/Condiciones-de-uso";
import Conocenos from "./Conocenos";
import Comofunciona from "./contact/Como-funciona";
import Contacto from "./contact/Contacto";

export const llista = [
  {
    path: "condicionesdeuso",
    titol: "Condiciones de uso",
    element: <Condicionesdeuso />,
  },
];

export const llistafooter = [
  { path: "conocenos", titol: "Conocenos", element: <Conocenos /> },
  { path: "comofunciona", titol: "Como funciona", element: <Comofunciona /> },
  { path: "contacto", titol: "Contacto", element: <Contacto /> },
];
