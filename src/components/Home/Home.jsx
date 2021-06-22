import style from "../../CSS/home.module.scss";

export default function Home() {
  return (
    <div>
      <div className={style.fondo}>
        <h1>ELIGE BIEN,</h1>
        <h1>VIVE BIEN.</h1>
        <h6>Solo estás a una decisión de distancia...</h6>
      </div>
      <div>
        <h3>EL MEJOR SERVICIO POST-VENGA</h3>
        <h1>UNA EMPRESA</h1>
        <h1>DE MULTISERVICIOS</h1>
        <h4>
          Cuando se trata de ayudara conseguir el hogar ideal JFC Consultores es
          tu mejor opción, con profesionales especializados en cada ambito
          tenemos la posibilidad de brindarte un servicio completo de principio
          a fin.
        </h4>
        <h4>
          Contamos con proyectos de los mas variados para cubrir todas las
          necesidades de nuestros clientes: apartamentos, casas, proyectos de
          playa y todo de primer nivel. No te lo vas a querer perder...
        </h4>
        <ul>
          <li>Bienes Raices</li>
          <li>Legales</li>
          <li>Contratistas</li>
        </ul>
      </div>
    </div>
  );
}
