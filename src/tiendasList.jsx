import { Link } from "react-router-dom";
import tiendas from "./tiendas"; // ✅ sin llaves

function TiendasList() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 title-tienda-bario">
        Tiendas de Barrio
      </h1>
      {tiendas.map((productos) => (
        <div
          key={productos.id}
          className="border p-4 mb-2 rounded hover:bg-gray-100 transition"
        >
          <h2 className="text-lg font-semibold">{productos.nombre}</h2>
          <ul className="bussines-list">
            <li>
              <Link to={`/tienda/${productos.id}`} className="bussines-list">
                {productos.nombre}
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TiendasList;
