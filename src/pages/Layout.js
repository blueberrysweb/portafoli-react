import { Outlet, Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { llista } from "./Llista";

export default function Layout() {
  return (
    <>
      <Header />

      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet />
        </main>
        <nav className="HolyGrail-nav">
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
        {/* <aside className="HolyGrail-ads">…</aside> */}
      </div>
      <Footer />
    </>
  );
}
