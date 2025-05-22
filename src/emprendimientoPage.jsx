import React from "react";
import { useParams, Link } from "react-router-dom";
import emprendimientos from "./emprendimientos";
import DetalleEmprendimiento from "./detalleEmprendimiento"; // Asegúrate de importar correctamente
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BusinessPage() {
  const { id } = useParams();
  const emprendimiento = emprendimientos.find((b) => b.id === id);

  if (!emprendimiento) return <p>Negocio no encontrado</p>;

  return (
    <div>
      <h2>{emprendimiento.name}</h2>
      <p>{emprendimiento.description}</p>
      {emprendimiento.horario && <p>{emprendimiento.horario}</p>}
      <p>
        <strong>Dirección:</strong> {emprendimiento.address}
      </p>

      {/* 👇 Muestra galería solo si hay imágenes */}
      {emprendimiento.imagenes && emprendimiento.imagenes.length > 0 && (
        <DetalleEmprendimiento
          nombreNegocio={emprendimiento.name}
          imagenes={emprendimiento.imagenes}
        />
      )}

      <h4>Productos:</h4>
      <ul>
        {emprendimiento.products.map((p, i) => (
          <li key={i}>
            {p.name} - <strong>${p.price}</strong>
          </li>
        ))}
      </ul>

      <div>
        <button className="button-cta-empresa">
          Comunicarme con la empresa
        </button>
        <button className="button-cta-domicilio">Pedir a domicilio 🛵</button>
      </div>

      <Link to="/">⬅️ Volver a la lista</Link>
    </div>
  );
}
