import React from "react";
import { Link } from "react-router-dom";
import emprendimientos from "./emprendimientos";

export default function BusinessList() {
  return (
    <div>
      <h2 className="title-tienda-bario">
        Emprendimientos en tendencia <span className="emoji-full">🔥</span>
      </h2>
      <ul className="bussines-list">
        {emprendimientos.map((biz) => (
          <li key={biz.id}>
            <Link to={`/emprendimiento/${biz.id}`}>{biz.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
