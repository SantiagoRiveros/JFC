import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Catalogue() {
  const { push } = useHistory();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then(({ data }) => setProductos(data))
      .catch((err) => console.log(err));
  }, []);

  return <div>{productos.count && productos.rows.map((producto) => {})}</div>;
}
