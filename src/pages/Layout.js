import { Outlet, Link } from "react-router-dom";
import { Header } from "./Header";
import llista from "./Llista";

export default function Layout() {
  return (
    <>
      <Header />

      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
        </main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {llista.map((item) => (
              <li>
                <Link to={item.path}>{item.titol}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <aside class="HolyGrail-ads">…</aside>
      </div>
      <footer>
        <div class="footercontent">
          <div></div>
          <div>
            <ul class="ulfooter">
              <li class="lifooter">Ivan Pala</li>
              <li class="lifooter">
                <a href="">Conocenos</a>
              </li>
              <li class="lifooter">
                <a href="como-funciona.html">Como funciona</a>
              </li>
              <li class="lifooter">
                <a href="contacto.html">Contacto</a>
              </li>
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
                <a href="legal/condiciones-de-uso.html">
                  Política de privacidad
                </a>
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
      </footer>
    </>
  );
}
