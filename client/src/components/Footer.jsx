import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../CSS/footer.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const { push } = useHistory();
  return (
    <div className="containerfooter">
      <div className="containers1">
        <h2>JFC Consultores</h2>
        <h5 className="ha3">Copyright JFC Consultores 2021</h5>
        <div className="iconsFA">
          <a href="https://www.instagram.com/helpticok/?hl=es-la">
            <FaInstagram className="px-2" size={30} />
          </a>
          <a href="https://www.linkedin.com/company/help-tic/?originalSubdomain=ar">
            <FaLinkedin className="px-2" size={30} />
          </a>
          <a href="https://www.facebook.com/helpticok/" className="iconsFA">
            <FaFacebookSquare className="px-2" size={30} />
          </a>
        </div>
        </div>
        <div className="containers2">
          <ul style={{paddingRight: '60px', margin: '0'}}>
            <li className="lis">Preguntas frecuentes</li>
            <li className="lis">Solicitud de contrato</li>
            <li className="lis">Trabaja con nosotros</li>
            <li className="lis">Terminos y condiciones</li>
          </ul>
        </div>
        <div className="containers3">
          <h3 className="ha3">ATENCION AL CLIENTE</h3>
          <h2>0800-943-2255</h2>
        </div>
    </div>
  );
}
