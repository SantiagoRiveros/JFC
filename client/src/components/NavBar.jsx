import { useHistory } from "react-router-dom";
import React from "react";

export default function NavBar() {
  const { push } = useHistory();

  return (
    <div>
      <ul>
        <li>Bienes Raices</li>
        <li>Legal</li>
        <li>Contratistas</li>
        <li>Otros Servicios</li>
        <li>Blog</li>
        <li>Nosotros</li>
        <li>Contactanos</li>
      </ul>
    </div>
  );
}
