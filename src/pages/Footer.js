import { llistafooter } from "./Llista";
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
            <li class="lifooter">
              <a href="">Preguntas frecuentes</a>
            </li>
            <li class="lifooter">
              <a href="">Reglas de publicación</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="ulfooter">
            <li class="lifooter">Legal</li>
            <li class="lifooter">
              <a href="legal/condiciones-de-uso.html">Condiciones de uso</a>
            </li>
            <li class="lifooter">
              <a href="legal/condiciones-de-uso.html">Política de privacidad</a>
            </li>
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
