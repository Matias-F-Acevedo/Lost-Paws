import Navbar from "../navbar/Navbar"
import "./Nosotros.css"
import { Carousel } from "react-responsive-carousel"; // importa el componente de carrusel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // importa los estilos del carrusel
import Footer from "../footer/footer"

const Nosotros = () => {
    return (
      <>
        <Navbar/>
      <div className="nosotrosDiv">
        <div className="title-aboutUs">
        <h2>🐾 Find lost animals with us 🐾</h2>
        </div>
        <div className="content-aboutUs">
       <br></br>
        <p>
        In our organization, we are dedicated to finding and rescuing lost animals. Our main goal is to reunite lost pets with their owners.
        </p>
        <p>
        We have a team of passionate volunteers and animal lovers who work tirelessly to find and rescue animals in distress or abandoned.
        </p>
        <p>
        We use advanced technology and work closely with local animal shelters and competent authorities to achieve our goals.
        </p>
        <p>
        If you have lost your pet, we recommend that you contact us immediately...
        </p>
        <p>
        Provide a detailed description of the lost animal, its breed, size, color and any other relevant information, including a photograph.
        </p>
        <p>
        We will do our best to locate your pet and reunite you with him/her as soon as possible!
        </p>
        <p>
        If you are interested in being part of our organization as a volunteer or if you would like to support us in any other way, please contact us - together we can make a difference!
        </p>
        <p className="email">lost.paws@gmail.com</p>
        </div>
        </div>
        <div className="carousel-container">
        <Carousel autoPlay={true} interval={2000}>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWO_Uaxkk_Fqe5IWydHC03KqOSHxnUDLLqdj80IiCeIDV77WTstjpqpQ5vGjv6i9AO4E&usqp=CAU" alt="Imagen 1" />
            <p className="legend">Always</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptuinqBg7c5Sw9texX8_JMwlngwasTx8hY8IOjZTpc3KUbaALNQPR2s0_svOu54QJ9QI&usqp=CAU" alt="Imagen 2" />
            <p className="legend">rescuing </p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt800EyFJa-0KbMNIp9ljf3t-NsP38c_Ct0epqknRn_k50KfvMWdGwG8RVJEI2FTjohOA&usqp=CAU" alt="Imagen 3" />
            <p className="legend">lost</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPy6FiHcz6Wxfpgg28WGLH5Ujt62o-rN7HYAMK_1O7qzSnVEKNpw-CiBreUmm5Da5DxY&usqp=CAU" alt="Imagen 4" />
            <p className="legend">animals</p>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVMapRwthYIlDqXsLZZYl9u74aZ8nha9VhNXLmw-LFOZZ2h1ZpqCB25WhjtZlWU2ylt0&usqp=CAU" alt="Imagen 5" />
            <p className="legend">together</p>
            </div>
        </Carousel>
        </div>
        <Footer></Footer>
      </>
    );
  }
  export default Nosotros;