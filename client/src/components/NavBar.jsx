import { useHistory, Link } from "react-router-dom";
import React from "react";
import style from "../CSS/navbar.css";

export default function NavBar() {
  const { push } = useHistory();

  return (
    <div class="fondo">
      <ul class="list">
        <li onClick={() => push("/")} class="item">
          <h2 class="text">HOME</h2>
        </li>
        <li class="item">
          <h2 class="text">BIENES RAICES</h2>
        </li>
        <li class="item">
          <h2 class="text">LEGAL</h2>
        </li>
        <li class="item">
          <h2 class="text">CONTRATISTAS</h2>
        </li>
        <li class="item">
          <h2 class="text">OTROS SERVICIOS</h2>
        </li>
        <li class="item">
          <h2 class="text">BLOG</h2>
        </li>
        <li class="item">
          <h2 class="text">NOSOTROS</h2>
        </li>
        <li class="item">
          <h2 class="text">CONTACTANOS</h2>
        </li>
      </ul>
    </div>
  );
}
