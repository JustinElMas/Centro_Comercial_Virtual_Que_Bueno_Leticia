import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessList from "./BusinessList";
import BusinessPage from "./BusinessPage";
import TiendasList from "./tiendasList";
import TiendasPage from "./tiendapage";
import "./styles.css";
import DetalleNegocio from "./detalleNegocio";
import DetalleEmprendimiento from "./detalleEmprendimiento";
import EmprendimientosList from "./emprendimientosList";
import EmprendimientosPage from "./emprendimientoPage";
import Footer from "./footer";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="home-title">
          Bienvenido al centro comercial virtual CC - Que bueno Leticia{" "}
          <span>🛵🍞🚪</span>
        </h1>
        <h5 className="parrafo">Encuentra los mejores precios y domicilios.</h5>
      </div>
      <div className="App">
        <h1>Tienda Virtual de Negocios Locales</h1>
        <Routes>
          <Route path="/" element={<BusinessList />} />
          <Route path="/negocio/:id" element={<BusinessPage />} />
        </Routes>

        <DetalleNegocio></DetalleNegocio>
        <div>
          <Routes>
            <Route path="/" element={<TiendasList />} />
            <Route path="/tienda/:id" element={<TiendasPage />} />
          </Routes>
        </div>

        <DetalleEmprendimiento></DetalleEmprendimiento>
        <div>
          <Routes>
            <Route path="/" element={<EmprendimientosList />} />
            <Route
              path="/emprendimiento/:id"
              element={<EmprendimientosPage />}
            />
          </Routes>
        </div>
      </div>

      <Footer></Footer>
    </Router>
  );
}
