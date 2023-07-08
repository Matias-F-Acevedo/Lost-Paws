import "./footer.css"
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom"
function Footer() {

    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer-row">
                    <div className="footer-links">

                    <Link to={"/"}><img src="/src/components/navbar/logo.png" alt="logo Lost Paws" /></Link>
                        <p>Copyright © 2023 Lost Paws.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to={"/AboutUs"}>About us</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link to={"/"}>Privacy policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Follow us on our social media!</h4>
                        <div className="social-links">
                            <Link to={"/"}><AiFillFacebook /></Link>
                            <Link to={"/"}><AiFillTwitterCircle /></Link>
                            <Link to={"/"}><AiFillInstagram /></Link>
                            <Link to={"/"}><AiOutlineWhatsApp /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )

}


export default Footer;