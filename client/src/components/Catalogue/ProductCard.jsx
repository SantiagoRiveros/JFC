import { useHistory } from "react-router-dom";

export default function ProductCard(props) {
  const { push } = useHistory();
  return (
    <div>
      <img src={props.url} />
      <h3>{props.titulo}</h3>
      <h4>Superficie: {props.metraje} metros cuadrados</h4>
      <h4>{props.ubicacion}</h4>
      <h4>{props.precio}</h4>
    </div>
  );
}
