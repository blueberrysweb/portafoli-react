export default function Vector() {
    let llista = [22, 4];
  
    let llista2 = ["Pablo", "Pedro", "Ivan", "Oli"];
  
    let numMayor = Math.max(...llista);
    let numMenor = Math.min(...llista);
    /*array llista*/
  
    const llistaprincipal = llista.map((num) => <li>{num}</li>);
    /*array llista2*/
  
    const llistaprincipal2 = llista2.map((num) => <li>{num}</li>);
  
    /*afegeix un element nou a un array*/
    llista.splice(2, 0, 2);
    /* treu els elements repetits d'un array */
    const llistaArr = [...new Set(llista)];
    const eliminarepes = llistaArr.map((num) => <li>{num}</li>);
  
    /* treu els elements NO repetits d'un array */
  
    const imprimerepes = eliminarepes.filter((value, index) => value !== index);
  
    /* Concatenar dos arrays */
  
    let exercici5 = [];
    for (let i = 0; i < llista.length; i++) {
      exercici5.push(<li>{llista[i] + llista2[i]} </li>);
    }
  
    let suma = 0;
    let Mitjana = 0;
  
    for (let i = 0; i < llista.length; i++) {
      suma += llista[i];
      Mitjana = suma / llista.length;
    }
  
    /* Exercicics 7 */
  
    return (
      <>
        <label>Array</label>
        <br />
        <ul>{llistaprincipal}</ul>
        <label>Array</label>
        <br />
        <ul>{llistaprincipal2}</ul>
        <label>comprovar el num major d'un array</label>
        <br />
        {numMayor}
        <br />
        <label>comprovar el num menor d'un array</label>
        <br />
        {numMenor}
        <br />
        <label>Suma d'un array</label>
        <br />
        {suma}
        <br />
        <label>Mitjana d'un array</label>
        <br />
        {Mitjana}
        <br />
        <label>Afegir un nou enter en un array</label>
        <br />
        {llista}
        <br />
        <label>Treure els repetits en un array</label>
        <br />
        <ul>{eliminarepes}</ul>
        <br />
        <label>Treure els repetits en un array</label>
        <br />
        {imprimerepes}
        <label>Concatenar un array</label>
        <br />
        <ul>{exercici5}</ul>
      </>
    );
  }