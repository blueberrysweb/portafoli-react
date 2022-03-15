import "./App.css";
import "./";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import {
  llista,
  llistafooter,
  llistaSoporte,
  llistaLegal,
} from "./pages/Llista";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
          {llistafooter.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
          {llistaSoporte.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
          {llistaLegal.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
