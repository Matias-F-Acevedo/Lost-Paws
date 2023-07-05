import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from '../UserContext';
import { TbLogout } from "react-icons/tb";





function Navbar({ componentAdditional }) {


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
            <div className="componentAdditional">
                {componentAdditional}

            </div>
            <nav className="nav">

                <ul className="nav-links">

                    <li><Link to={"/nosotros"}>About us</Link></li>
                    <li><Link to={"/contacto"}>Contact</Link></li>

                </ul>

            </nav>

            {user ?
                <button onClick={handleLogout} className="btn btnCloseSession">Logout  <TbLogout/></button>
                :
                <Link to={"/login"} className="btn"><button>Login</button></Link>
            }

            <button onClick={openNav} className="menu">Menu</button>


            <div className="overlay" id="responsive-menu">
                <button onClick={closeNav} className="close">x</button>
                <div className="overlay-content">
                    <Link to={"/nosotros"}>About us</Link>
                    <Link to={"/contacto"}>Contact</Link>
                    {user ?
                        <button onClick={handleLogout} className="btnCloseSession">Logout <TbLogout/></button>
                        :
                        <Link to={"/login"} className="btn"><button>Login</button></Link>}

                </div>
            </div>
        </header>
    )
}



export default Navbar