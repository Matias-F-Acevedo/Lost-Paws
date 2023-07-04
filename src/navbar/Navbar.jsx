import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from '../UserContext';






function Navbar({ componenteAdicional }) {


    const { user, handleLogout } = useContext(UserContext);

    function openNav() {
        document.getElementById("responsive-menu").style.width = "100%"

    }

    function closeNav() {
        document.getElementById("responsive-menu").style.width = "0%"

    }



    return (
        <header className="header">
            <div className="logo">
                <Link to={"/"}> <img src="/src/navbar/logo.png" alt="Logo" /></Link>
            </div>
            <div className="componentAdicional">
                {componenteAdicional}

            </div>
            <nav className="nav">

                <ul className="nav-links">

                    <li><Link to={"/nosotros"}>Nosotros</Link></li>
                    <li><Link to={"/contacto"}>Contacto</Link></li>

                </ul>

            </nav>

            {user ?
                <button onClick={handleLogout} className="btn btnCloseSession">Cerrar sesion</button>
                :
                <Link to={"/login"} className="btn"><button>Ingresar</button></Link>
            }

            <button onClick={openNav} className="menu">Menu</button>


            <div className="overlay" id="responsive-menu">
                <button onClick={closeNav} className="close">x</button>
                <div className="overlay-content">
                    <Link to={"/nosotros"}>Nosotros</Link>
                    <Link to={"/contacto"}>Contacto</Link>
                    {user ?
                        <button onClick={handleLogout} className="btnCloseSession">Cerrar sesion</button>
                        :
                        <Link to={"/login"} className="btn"><button>Ingresar</button></Link>}

                </div>
            </div>
        </header>
    )
}



export default Navbar