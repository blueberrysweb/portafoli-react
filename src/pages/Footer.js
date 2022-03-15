import { llistaSoporte, llistafooter, llistaLegal } from "./Llista";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div class="footercontent">
        <div></div>
        <div>
          <ul class="ulfooter">
            <li class="lifooter">Ivan Pala</li>
            {llistafooter.map((item) => (
              <li class="lifooter">
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul class="ulfooter">
            <li class="lifooter">Soperte</li>
            {llistaSoporte.map((item) => (
              <li class="lifooter">
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul class="ulfooter">
            <li class="lifooter">Legal</li>
            {llistaLegal.map((item) => (
              <li class="lifooter">
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul class="ulfooter">
            <li class="lifooter">Profesionales</li>
            <li class="lifooter">
              <a href="">Negocios</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="pieDiv">
        <ul class="ulmenu">
          <li class="limenu">
            <a href="#home">facebook</a>
          </li>
          <li class="limenu">
            <a href="#news">youtube</a>
          </li>
          <li class="limenu">
            <a href="#contact">instagram</a>
          </li>
        </ul>
      </div>
    </>
  );
}
