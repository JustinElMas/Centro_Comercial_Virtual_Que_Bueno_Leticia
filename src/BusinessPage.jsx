import React from "react";
import { useParams, Link } from "react-router-dom";
import businesses from "./businesses";
import DetalleNegocio from "./detalleNegocio"; // Asegúrate de importar correctamente
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function BusinessPage() {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === id);

  if (!business) return <p>Negocio no encontrado</p>;

  return (
    <div>
      <h2>{business.name}</h2>
      <p>{business.description}</p>
      {business.horario && <p>{business.horario}</p>}
      <p>
        <strong>Dirección:</strong> {business.address}
      </p>

      {/* 👇 Muestra galería solo si hay imágenes */}
      {business.imagenes && business.imagenes.length > 0 && (
        <DetalleNegocio
          nombreNegocio={business.name}
          imagenes={business.imagenes}
        />
      )}

      <h4>Productos:</h4>
      <ul>
        {business.products.map((p, i) => (
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
