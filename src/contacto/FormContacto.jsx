import { useRef } from "react";
import Navbar from "../navbar/Navbar"
import "./formContacto.css"



const BASE_URL = "https://648104b3f061e6ec4d4a2cfd.mockapi.io/contacto";
function addOne(user) {
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }


const FormContacto = () => {
  const nombreCompleto = useRef();
  const email = useRef();
  const telefono = useRef();
  const mensaje = useRef();
  
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
      mensaje: mensaje.current.value
    }
    addOne(contacto)
  }

return (
  <>
  <Navbar />
    <div id="divFormContacto">
      <p id="parOutForm">Si usted perdio su mascota o la encontro publicada en <a href="/">aqui</a>, <br /> envienos un mensaje y nos pondremos en contacto con usted.</p>
    <form id="formContacto" action="" className="form-register" onSubmit={handleSubmit}>
      <h4>Contacto</h4>
      <input ref={nombreCompleto} className="controls" type="text" name="nombreCompleto" id="nombreCompleto" placeholder="Ingrese su Nombre y apellido" />
      <input ref={email} className="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" />
      <input ref={telefono} className="controls" type="tel" id="phone" name="phone" placeholder='Ingrese su Numero de Telefono'required
        pattern="^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$"/>
      <textarea ref={mensaje} className= "controls" name="mensaje" id="mensaje" cols="30" rows="10" placeholder='Ingrese su mensaje'></textarea>
      <p id="parOnForm">Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
      <input className="botons" type="submit" value="Enviar Mensaje" />
    </form>
    </div>
  </>
)
}

export default FormContacto