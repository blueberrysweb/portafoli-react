import { llistaSoporte, llistafooter, llistaLegal } from "./Llista";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div className="footercontent">
        <div></div>
        <div>
          <ul className="ulfooter">
            <li className="lifooter">Ivan Pala</li>
            {llistafooter.map((item) => (
              <li className="lifooter">
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="ulfooter">
            <li className="lifooter">Soporte</li>
            {llistaSoporte.map((item) => (
              <li className="lifooter">
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="ulfooter">
            <li className="lifooter">Legal</li>
            {llistaLegal.map((item) => (
              <li className="lifooter">
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="ulfooter">
            <li className="lifooter">Profesionales</li>
            <li className="lifooter">
              <a href="">Negocios</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pieDiv">
        <ul className="ulmenu">
          <li className="limenu">
            <a href="#home">facebook</a>
          </li>
          <li className="limenu">
            <a href="#news">youtube</a>
          </li>
          <li className="limenu">
            <a href="#contact">instagram</a>
          </li>
        </ul>
      </div>
    </>
  );
}
