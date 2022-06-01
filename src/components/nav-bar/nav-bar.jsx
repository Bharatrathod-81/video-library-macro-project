import { Link } from "react-router-dom";
import "./nav-bar.css";


export const NavBar = () => {

    return(
        <div className="nav-body align-centre jstfy-spce-around">
            <i className="fa fa-bars menu-btn margin-small"></i>
            <div className="nav-items jstfy-centre align-centre jstfy-spce-btwn">
                <h1><Link to="/"><span className="logo1 padding-small">VIRTUAL</span><span className="logo2">tube</span></Link></h1>
                <button className="login-btn padding-small margin-small">LOGIN</button>
            </div>
        </div>
    )
}