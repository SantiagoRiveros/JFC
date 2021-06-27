import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../CSS/footer.css";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const { push } = useHistory();
  return (
    <div>
      <div>
        <h1>JFC Consultores</h1>
        <h4>Copyright JFC Consultores 2021</h4>
        <div className="iconsFA">
          <a href="https://www.instagram.com/helpticok/?hl=es-la">
            <FaInstagram className="px-2" size={40} />
          </a>
          <a href="https://www.linkedin.com/company/help-tic/?originalSubdomain=ar">
            <FaLinkedin className="px-2" size={40} />
          </a>
          <a href="https://www.facebook.com/helpticok/" className="iconsFA">
            <FaFacebookSquare className="px-2" size={40} />
          </a>
        </div>
        <div>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Solicitud de contrato</li>
            <li>Trabaja con nosotros</li>
            <li>Terminos y condiciones</li>
          </ul>
        </div>
        <div>
          <h1>Atencion al cliente</h1>
          <h3>0800-943-2255</h3>
        </div>
      </div>
    </div>
  );
}
