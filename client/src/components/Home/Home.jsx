import style from "../../CSS/home.css";
import React from "react";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";

export default function Home() {
  return (
    <div class="container">
      <div class="fondo1">
        <h1 class="img1h1">ELIGE BIEN,</h1>
        <h1 class="img1h12">VIVE BIEN.</h1>
        <h6 class="img1h6"> Solo estás a una decisión de distancia...</h6>
      </div>
      <img src={img1} class="fondo2"/>
      <div class="fondo2txt">
      <h6 class="img2h6">EL MEJOR SERVICIO POST-VENTA</h6>
      <h1 class="img2h1">UNA EMPRESA</h1>
      <div class="containerh1">
        <h1 class="img2h1">DE </h1>
        <h1 class="img2h12">MULTISERVICIOS</h1>
        </div>
        <div class="containerh6">
        <p id="img2h62">
          Cuando se trata de ayudara conseguir el hogar ideal JFC Consultores es
          tu <span>mejor opción:</span> con profesionales especializados en cada ambito
          tenemos la posibilidad de brindarte un <span>servicio completo</span> de principio
          a fin.
        </p>
        <p id="img2h62">
          Contamos con proyectos de los mas variados para cubrir todas las
          necesidades de nuestros clientes: apartamentos, casas, proyectos de
          playa y todo de primer nivel.
        </p>
        <p class="img2h63">No te lo vas a querer perder...</p>
        </div>
        <div style={{ marginTop: "4rem", marginLeft: "20rem", marginRight: "20rem", display: "flex", justifyContent: "space-around"
}}>
        <div class="containerli">
        <img src={img2} class="imgli"/>
        <span class="lii">Bienes Raices</span>
          </div>
          <div class="containerli">
          <img src={img3} class="imgli"/>
          <span class="lii">Legales</span>
          </div>
          <div class="containerli">
          <img src={img4} class="imgli"/>
          <span class="lii">Contratistas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
