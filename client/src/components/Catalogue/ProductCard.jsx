import { useHistory } from "react-router-dom";
import React from "react";

export default function ProductCard(props) {
  const { push } = useHistory();
  return (
<div class="card" style={{width: '350px', fontFamily: 'Montserrat', borderRadius: '0.5rem', marginBottom: '15px'}}>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

<ol class="carousel-indicators">
  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>

<div class="carousel-inner">

  <div class="carousel-item active">
    <img class="d-block w-100" src={props.url1} alt="First slide" style={{height: '200px', borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem', backgroundSize: 'cover'}}/>
  </div>

  <div class="carousel-item">
    <img class="d-block w-100" src={props.url2} alt="Second slide" style={{height: '200px', borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem', backgroundSize: 'cover'}}/>
  </div>

  <div class="carousel-item">
    <img class="d-block w-100" src={props.url3} alt="Third slide" style={{height: '200px', borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem', backgroundSize: 'cover'}}/>
  </div>

</div>

<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>

</div>
  <div class="card-body">
    <h5 class="card-title">{props.precio} ARS</h5>
    <p class="card-text">{props.titulo}</p>
    <h6 class="superficie">{props.metraje} m² - {props.ubicacion}</h6>
  </div>
</div>


  );
}

// export default function ProductCard(props) {
//   const { push } = useHistory();
//   return (
//     <div>
//       <img src={props.url} />
//       <h3>{props.titulo}</h3>
//       <h4>Superficie: {props.metraje} metros cuadrados</h4>
//       <h4>{props.ubicacion}</h4>
//       <h4>{props.precio}</h4>
//     </div>
//   );
// }
