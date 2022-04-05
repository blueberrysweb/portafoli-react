import { useState } from "react";

export default function ToggleButton() {
  const [color, setColor] = useState("red");
  const estaPremut = color !== "red";
  const toggle = () => {
    if (color === "red") setColor("cyan");
    else setColor("red");
  };

  return (
    <>
      <button style={{ background: color }} onClick={toggle}>
        Toggle Me
      </button>

      <p className={color !== "red" ? "txtp" : "txtl"}>lorem ipsu</p>
      {estaPremut ? <p>hola mon</p> : <p>no esta premut</p>}
    </>
  );
}