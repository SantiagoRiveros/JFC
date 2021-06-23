import { useHistory } from "react-router-dom";
import React from "react";
import style from "../CSS/navBar.module.scss";

export default function NavBar() {
  const { push } = useHistory();

  return (
    <nav className={style.nav}>
      <ul>
        <li>Bienes Raices</li>
        <li>Legal</li>
        <li>Contratistas</li>
        <li>Otros Servicios</li>
        <li>Blog</li>
        <li>Nosotros</li>
        <li>Contactanos</li>
      </ul>
      </nav>
  );
}
