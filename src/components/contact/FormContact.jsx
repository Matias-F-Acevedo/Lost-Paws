import { useRef, useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./formContact.css"
import Footer from "../footer/Footer"
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { addOne, deleteOne, updateOne } from "../../services/fuctionsHTTP";
import { uploadFile } from "../../services/firebase/config";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import {AiFillCheckCircle, AiOutlineCheckCircle} from "react-icons/ai";

const BASE_URL = "https://648104b3f061e6ec4d4a2cfd.mockapi.io/contacto/";

const FormContact = () => {
  const nombreCompleto = useRef();
  const email = useRef();
  const telefono = useRef();
  const mensaje = useRef();
  const acuerdo = useRef();
  const fileInput = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  const [datos, setDatos] = useState([]);
  const [refreshComponent, setRefreshComponent] = useState();


  const clearFields = () => {
    nombreCompleto.current.value = "";
    email.current.value = "";
    telefono.current.value = "";
    mensaje.current.value = "";
    fileInput.current.value = null;
  }


  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(
      nombreCompleto.current.value,
      email.current.value,
      mensaje.current.value,
    );

    const file = fileInput.current.files[0];

    if (file) {
      try {
        const url = await uploadFile(file);
        const contacto = {
          nombreCompleto: nombreCompleto.current.value,
          email: email.current.value,
          telefono: telefono.current.value,
          mensaje: mensaje.current.value,
          imagen: url,
        };
        addOne(contacto, BASE_URL);
        setEnviado(true);
        setError(null);
        clearFields();
      } catch (error) {
        setError(error.message);
        setEnviado(false);
      }
    } else {
      setError("Please select a file");
      setEnviado(false);
    }
  };
    

    
  
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setDatos(data))
      .catch((err) => console.error(err));
  }, [refreshComponent]);


  function refresh() {
    setTimeout(() => setRefreshComponent(!refreshComponent), 1000)
  }



  function deleteCardContact(id) {
    Swal.fire(
      {
        icon: "question",
        title: "Are you sure you want to eliminate this Card?",
        showDenyButton: true,
        denyButtonText: "CANCEL",
        confirmButtonText: "DELETE",
        confirmButtonColor: "green",
        iconColor: "#581845",


      }
    ).then(response => {
      if (response.isConfirmed) {
        deleteOne(id, BASE_URL)
        refresh();
        Swal.fire(
          {
            icon: "success",
            title: "Card has been successfully removed",
            confirmButtonColor: "#581845",
            iconColor: "#581845",
          })
      } else if (response.isDenied) {
        Swal.fire(
          {
            icon: "info",
            title: "The card has not been removed",
            confirmButtonColor: "#581845",
            iconColor: "#581845",
          })
      } else {
      }
    })
  }

  function CardDisplayed(card) {
    updateOne(card.id, { ...card, boolean: !card.boolean},  BASE_URL)
    refresh();
  }


  return (
    <>
      <Navbar />
      {user ? (
        <>
          <div className="Container-PendingRequests">
            <h1>Pending requests: <span>{datos.length}</span></h1>
          </div>
          <div className="container-contacto">
            {datos.map((form) => (
              <div key={form.id}>
                <div className="card-contacto">
                  <div className="delete-card-contact">
                    <p onClick={() => deleteCardContact(form.id)}><MdDeleteForever></MdDeleteForever></p>
                  </div>
                  <div className="card-content">
                    <ul>
                      <li>Name: {form.nombreCompleto}</li>
                      <li>Phone: {form.telefono}</li>
                      <li>Email: {form.email}</li>
                      <li>Message: {form.mensaje}</li>
                    </ul>
                    <div className="container-img-contact">
                    <a href={form.imagen} target="_blank" rel="noopener noreferrer">
                    <img src={form.imagen} alt="Preview" className="image-preview" />
                  </a>
                  </div>
                  </div>
                  <div>
                    <div className="container-check" onClick={() => CardDisplayed(form)}>{form.boolean ? <p className="check">< AiFillCheckCircle></ AiFillCheckCircle></p> : <p className="no-check"><AiOutlineCheckCircle></AiOutlineCheckCircle></p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div id="divFormContacto">
          <p id="parOutForm">If you lost your pet or found it published <a href="/">here</a>, <br /> send us a message and we will contact you.</p>
          <form id="formContacto" action="" className="form-register" onSubmit={handleSubmit}>
            <h4>Contacto</h4>
            <input ref={nombreCompleto} className="controls" type="text" name="nombreCompleto" id="nombreCompleto" placeholder="Enter your first and last name" />
            <input ref={email} className="controls" type="email" name="correo" id="correo" placeholder="Enter your email address" />
            <input ref={telefono} className="controls" type="tel" id="phone" name="phone" placeholder='Enter your Phone Number' required
              pattern="^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$" />
            <input type="file" ref={fileInput} className="controls" />
            <textarea ref={mensaje} className="controls" name="mensaje" id="mensaje" cols="30" rows="7" placeholder='Enter your message (max length 125 characters)' maxLength="125" required> </textarea>
            <label htmlFor="acuerdo">
              <input ref={acuerdo} type="checkbox" id="parOnForm" name="acuerdo" required />
              I agree to the <a href="#">Terms and Conditions</a>
            </label>
            {enviado && <p className="success-message">The message was sent correctly.</p>}
            {error && <p className="error-message">{error}</p>}
            <input className="botons" type="submit" value="Send Message" />
          </form>
        </div>
      )}
      <Footer></Footer>
    </>
  )
}

export default FormContact








