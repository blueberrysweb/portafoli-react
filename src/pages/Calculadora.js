import { useState } from "react";


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function Button({ onPressed, children }) {
  return <button onClick={onPressed}>{children}</button>;
}

export default function Calculadora() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [novaEntrada, setNovaEntrada] = useState(false);
  const [display, setDisplay] = useState(0);
  const entraNumero = (numero) => {
    if (novaEntrada) setDisplay(numero);
    else setDisplay(display * 10 + numero);
    setNovaEntrada(false);
  };
  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) calcular();
    setOperacio(operacio);
  };
  const clear = () => {
    setOperacio("");
    setDisplay(0);
  };
  const calcular = () => {
    if (operacio === "+") setDisplay(antic + display);
    if (operacio === "-") setDisplay(antic - display);
  };
  return (
    <div className="Calculadora">
      <div className="Display">{display}</div>
      <div className="Numeros">
        {numeros.map((numero) => (
          <Button onPressed={() => entraNumero(numero)}>{numero}</Button>
        ))}
      </div>
      <div className="Butons">
        <button onClick={() => entraOperacio("+")}>+</button>
        <button onClick={() => entraOperacio("-")}>-</button>
        <button onClick={calcular}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}