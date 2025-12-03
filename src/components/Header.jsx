import React from "react";
import logo from "../assets/MBDS.svg"; // Remplace par le chemin réel de ton logo

function Header() {
  return (
    <header style={{ textAlign: "center", margin: "2rem 0" }}>
      <img src={logo} alt="Logo de la formation" style={{ height: "80px" }} />
      <h1>Introduction à React</h1>
      <p>A la découverte des premières notions de React</p>
    </header>
  );
}

export default Header;