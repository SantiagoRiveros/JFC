import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "../../CSS/contact.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  const [input, setInput] = useState({
    contactMail: "",
    contactPhone: "",
    body: "",
  });
  const { push } = useHistory();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (input.contactMail !== "" && input.body !== "") {
      axios
        .post("http://localhost:3000/contact", {
          contactMail: input.contactMail,
          contactPhone: input.contactPhone,
          body: input.body,
        })
        .then((data) => {
          alert(
            "En breve uno de nuestros representantes lo estara contactando"
          );
          push("/");
        })
        .catch((error) => alert(error));
    } else {
      alert("Debes indicar tu mail y el texto a enviar");
    }
  };

  return (
    <>
      <div
        style={{
          /*  backgroundImage: `url(${bgOthers})`, */
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container fluid className="text-muted">
          <div>
            <h1 className={`text-center ${style.contactbox}`}>CONTACTANOS</h1>
            <Row className="justify-content-md-center justify-content-sm-left">
              <Col md="auto">
                <h5 className={style.subtitle}>
                  Email<span className="text-danger">*</span>
                </h5>
                <div>
                  <input
                    name="contactMail"
                    type="email"
                    onChange={handleChange}
                    placeholder="Ingrese su email"
                    className={`shadow-lg ${style.textboxOthers}`}
                  />
                </div>
              </Col>
              <Col md="auto">
                <h5 className={style.subtitle}>Teléfono</h5>
                <div>
                  <input
                    name="contactPhone"
                    type="tel"
                    onChange={handleChange}
                    placeholder="Ingrese su telefono"
                    className={`shadow-lg ${style.textboxOthers}`}
                  />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <h5 className={`pt-3 ${style.subtitle}`}>
                  Mensaje<span className="text-danger">*</span>
                </h5>
                <div>
                  <textarea
                    cols="69"
                    rows="6"
                    name="body"
                    type="text"
                    onChange={handleChange}
                    placeholder="Ingrese el mensaje"
                    className={`mb-3 shadow-lg ${style.textbox}`}
                  />
                </div>
                <Button
                  onClick={() => handleClick()}
                  value="Enviar"
                  type="button"
                  className={`border-dark btn-lg font-weight-bold mb-4 rounded shadow-lg ${style.buttonContacto}`}
                >
                  Enviar
                </Button>
              </Col>
            </Row>
          </div>
          <p className="font-weight-bold mb-0 text-black-50">
            <small>
              <span className="text-danger">*</span>Campo obligatorio
            </small>
          </p>
        </Container>
      </div>
    </>
  );
}
