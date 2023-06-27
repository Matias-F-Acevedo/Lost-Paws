import "./navbar.css"
import { Link } from "react-router-dom"




function Navbar({ setAcceso, accesoPermitido}) {

    function openNav() {
        document.getElementById("responsive-menu").style.width = "100%"

    }

    function closeNav() {
        document.getElementById("responsive-menu").style.width = "0%"

    }

    function cerrarSesion (){
        setAcceso(false)
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to={"/"}> <img src="/src/navbar/loguito.png" alt="Logo" /></Link>
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><Link to={"/nosotros"}>Nosotros</Link></li>
                    <li><Link to={"/contacto"}>Contacto</Link></li>
                </ul>
            </nav>

            {/* cerramos la sesion cambiando el estado  */}
            {accesoPermitido ?<button onClick={cerrarSesion} className="btn btnCloseSession">Cerrar sesion</button>: <Link to={"/login"} className="btn"><button>Login</button></Link>}

            {/* <Link to={"/login"} className="btn"><button>Login</button></Link> */}

            <button onClick={openNav} className="menu">Menu</button>


            <div className="overlay" id="responsive-menu">
                <button onClick={closeNav} className="close">x</button>
                <div className="overlay-content">
                    <Link to={"/nosotros"}>Nosotros</Link>
                    <Link to={"/contacto"}>Contacto</Link>
                    {accesoPermitido ?<button onClick={cerrarSesion} className="btnCloseSession">Cerrar sesion</button>: <Link to={"/login"} className="btn"><button>Login</button></Link>}

                </div>
            </div>
        </header>
    )
}



export default Navbar