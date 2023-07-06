import { useRef, useState } from "react";
import Navbar from "../navbar/Navbar"
import "./formContacto.css"
import Footer from "../footer/footer"


const BASE_URL = "https://648104b3f061e6ec4d4a2cfd.mockapi.io/contacto";

function addOne(user) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Error al enviar el formulario");
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
      throw new Error("Error al enviar el formulario");
    });
}



const FormContacto = () => {
  const nombreCompleto = useRef();
  const email = useRef();
  const telefono = useRef();
  const mensaje = useRef();
  const acuerdo = useRef();
  const fileInput = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);



  const clearFields = () => {
    nombreCompleto.current.value = "";
    email.current.value = "";
    telefono.current.value = "";
    mensaje.current.value = "";
    fileInput.current.value = null;
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      nombreCompleto.current.value,
      email.current.value,
      mensaje.current.value,
    );

    const contacto = {
      nombreCompleto: nombreCompleto.current.value,
      email: email.current.value,
      telefono: telefono.current.value,
      mensaje: mensaje.current.value,
      imagen: fileInput.current.files[0],
    };
    addOne(contacto).then(() => {
      setEnviado(true);
      setError(null);
      clearFields();
    })
      .catch((err) => {
        setError(err.message);
        setEnviado(false);
      });
  }

  return (
    <>
      <Navbar />
      <div id="divFormContacto">
        <p id="parOutForm">If you lost your pet or found it published <a href="/">here</a>, <br /> send us a message and we will contact you.</p>
        <form id="formContacto" action="" className="form-register" onSubmit={handleSubmit}>
          <h4>Contacto</h4>
          <input ref={nombreCompleto} className="controls" type="text" name="nombreCompleto" id="nombreCompleto" placeholder="Enter your first and last name" />
          <input ref={email} className="controls" type="email" name="correo" id="correo" placeholder="Enter your email address" />
          <input ref={telefono} className="controls" type="tel" id="phone" name="phone" placeholder='Enter your Phone Number' required
            pattern="^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$" />
          <input type="file" ref={fileInput} className="controls" />
          <textarea ref={mensaje} className="controls" name="mensaje" id="mensaje" cols="30" rows="10" placeholder='Enter your message' required></textarea>
          <label htmlFor="acuerdo">
            <input ref={acuerdo} type="checkbox" id="parOnForm" name="acuerdo" required />
            I agree to the <a href="#">Terms and Conditions</a>
          </label>
          {enviado && <p className="success-message">The message was sent correctly.</p>}
          {error && <p className="error-message">{error}</p>}
          <input className="botons" type="submit" value="Send Message" />
        </form>
      </div>
      <Footer></Footer>
    </>
  )
}

export default FormContacto








