// src/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "2em",
        padding: "1em",
        textAlign: "center",
        backgroundColor: "#f009",
        fontSize: "0.9em",
        color: "#fff",
      }}
    >
      <p>
        © {new Date().getFullYear()} Un producto de SELVA TIC, hacemos
        Desarrollo web y publicidad digital llama al 310 554 9659 • Todos los
        derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
