import { Outlet, Link } from "react-router-dom";
import { Footer } from "./Footer";
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
      <Footer />
    </>
  );
}
