import "./Navbar.css"
import { Link } from "react-router-dom"
import croplogo from "../assets/croplogo.png";
import "../Home/Home"
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

    const location = useLocation()
    return (
        <body className="navpage">
            <nav className="nav">
                <Link to="/" className="homelogo">
                    <img src={croplogo} alt="healthhero" className="reslogo"></img>
                </Link>
                <ul>
                    <Link to="/benchmark" className="bench">Benchmark</Link>
                    <Link to="/tdee" className="tdee">TDEE</Link>
                    <Link to="/locations" className="loc">Locations</Link>
                    <Link to="/aboutus" className="aboutus">About us</Link>
                    <p1 className="linenav"></p1>
                    <Link to="/login">Login</Link>
                    <Link to="/signup" className="buttonsignup">Sign up</Link>

                </ul>

            </nav>
        </body>
    )


}
