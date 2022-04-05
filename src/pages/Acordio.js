import { useState } from "react";


export const text = ["txt1", "txt2", "txt3", "txt4"]; 
export default function Acordio() {
   
  const [obre1, setObre1] = useState("txt2");
  const obreclik = (index) => {
    if (obre1 === "txt2") setObre1("txt");
    else setObre1("txt2");
  };
  return (
    <>
      {text.map((index) => (
        <ul>
          <li>
            <button onClick={() => obreclik(index)}>apreta</button>
          </li>
        </ul>
      ))}

      <p className={obre1}>Hola</p>

      <p className={obre1}>Toggle 2</p>

      <p className={obre1}>Toggle 2</p>
    </>
  );
}