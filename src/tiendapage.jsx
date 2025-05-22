import React from "react";
import { useParams, Link } from "react-router-dom";
import tiendas from "./tiendas"; // sin llaves porque es export default

export default function TiendasPage() {
  const { id } = useParams();
  const tienda = tiendas.find((t) => t.id === id);

  if (!tienda) return <p>Tienda no encontrada</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{tienda.nombre}</h2>
      {/* Puedes agregar más datos si tienes, como descripción, dirección, etc. */}

      <h4 className="text-lg font-semibold mt-4 mb-2">Productos:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tienda.productos.map((p) => (
          <div
            key={p.id}
            className="border p-3 rounded shadow hover:shadow-md transition"
          >
            <img src={p.imagen} alt={p.nombre} className="imagen-producto" />
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p>${p.precio}</p>
            <div className="mt-2 flex gap-2">
              <button className="button-cta-empresa ">Añadir al carrito</button>
              <button className="button-cta-domicilio">
                Pedir a domicilio 🛵
              </button>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="block mt-4 text-blue-600 underline">
        ⬅️ Volver a la lista
      </Link>
    </div>
  );
}
