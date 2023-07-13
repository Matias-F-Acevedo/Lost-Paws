import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext,useRef } from "react";
import { UserContext } from '../../context/UserContext';
import { TbLogout,TbLogin } from "react-icons/tb";





function Navbar({ componentAdditional }) {
    
    const { user, handleLogout } = useContext(UserContext);
    const responsiveMenu = useRef();


    function openNav() {
        responsiveMenu.current.style.width="100%"
    }

    function closeNav() {
        responsiveMenu.current.style.width="0%"
    }



    return (
        <header className="header">
            <div className="logo">
                <Link to={"/"}> <img src="/src/components/navbar/logo.png" alt="Logo" /></Link>
            </div>
            <div className="componentAdditional">
                {componentAdditional}

            </div>
            <nav className="nav">

                <ul className="nav-links">

                    <li><Link to={"/AboutUs"}>About us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>

                </ul>

            </nav>

            {user ?
                <button onClick={handleLogout} className="btn btnCloseSession">Logout  <TbLogout/></button>
                :
                <Link to={"/login"} className="btn"><button>Login<TbLogin/></button></Link>
            }

            <button onClick={openNav} className="menu">Menu</button>


            <div ref={responsiveMenu} className="overlay" id="responsive-menu">
                <button onClick={closeNav} className="close">x</button>
                <div className="overlay-content">
                    <Link to={"/AboutUs"}>About us</Link>
                    <Link to={"/contact"}>Contact</Link>
                    {user ?
                        <button onClick={handleLogout} className="btnCloseSession">Logout <TbLogout/></button>
                        :
                        <Link to={"/login"} className="btn"><button>Login<TbLogin/></button></Link>}

                </div>
            </div>
        </header>
    )
}



export default Navbar