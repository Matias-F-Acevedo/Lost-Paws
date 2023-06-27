import Navbar from "../navbar/Navbar";
import "./nosotros.css";
import logo from "./wsp.png"
const Nosotros = ({accesoPermitido, setAcceso}) => {
    return (
      <>
        <Navbar accesoPermitido={accesoPermitido} setAcceso={setAcceso}/>
        <div className="nosotrosDiv">
        <h2>Encuentra animales perdidos con nosotros</h2>
        <p>
          En nuestra organización, nos dedicamos a encontrar y rescatar animales perdidos. <br />Nuestro objetivo principal es reunir a las mascotas perdidas con sus dueños.
        </p>
        <p>
          Contamos con un equipo de voluntarios apasionados y amantes de los animales que trabajan <br /> incansablemente para buscar y rescatar a los animales en situación de peligro o abandono.
        </p>
        <p>
          Utilizamos tecnología avanzada y colaboramos estrechamente con refugios de animales <br /> locales y autoridades competentes para lograr nuestros objetivos.
        </p>
        <p>
          Si has perdido a tu mascota, te recomendamos que nos contactes de inmediato...
        </p>
        <p>
          Proporciona una descripción detallada del animal perdido, su raza, tamaño, <br /> color y cualquier otra información relevante, también alguna fotografía.
        </p>
        <p>
          ¡Haremos todo lo posible por localizar a tu mascota y reunirte con ella lo antes posible!
        </p>
        <p>
          Si estás interesado en ser parte de nuestra organización como voluntario <br />o si quieres brindar apoyo de alguna otra manera, por favor contáctanos. ¡Juntos podemos marcar la diferencia!
        </p>
        <br />
        <ol>
         <h1>Como funciona Lost Paws?</h1> 
          <br />
          <li>Te pones en contacto con nosotros</li>
          <br />
          <li>Uno de nosotros via wsp o email se va a comunicar con vos para corroborar datos</li>
          <br />
          <li>Una vez que recibimos la informacion, procedemos a publicarlo en la pagina y en nuestras redes</li>
          <br />
          <li>Ahora solo queda esperar a que nuestra comunidad comparta y podamos dar con el paradero de tu mascota</li>
        </ol>
        <br />
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWO_Uaxkk_Fqe5IWydHC03KqOSHxnUDLLqdj80IiCeIDV77WTstjpqpQ5vGjv6i9AO4E&usqp=CAU" alt="Imagen 1" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptuinqBg7c5Sw9texX8_JMwlngwasTx8hY8IOjZTpc3KUbaALNQPR2s0_svOu54QJ9QI&usqp=CAU" alt="Imagen 2" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt800EyFJa-0KbMNIp9ljf3t-NsP38c_Ct0epqknRn_k50KfvMWdGwG8RVJEI2FTjohOA&usqp=CAU" alt="Imagen 3" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPy6FiHcz6Wxfpgg28WGLH5Ujt62o-rN7HYAMK_1O7qzSnVEKNpw-CiBreUmm5Da5DxY&usqp=CAU" alt="Imagen 4" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVMapRwthYIlDqXsLZZYl9u74aZ8nha9VhNXLmw-LFOZZ2h1ZpqCB25WhjtZlWU2ylt0&usqp=CAU" alt="Imagen 5" />
        <p><a href="LostPaws@gmail.com">LostPaws@gmail.com</a></p>
        <button id="puton"><a href="https://chat.whatsapp.com/LrbHspxSbXS0erOMqEf9Fn"><img id="imgg" src={logo} alt="" /></a></button>
        </div>
      </>
    );
  }
  export default Nosotros;