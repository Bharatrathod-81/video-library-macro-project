import "./nav-bar.css";
import { Link } from "react-router-dom";
import { toggler } from "../../slices/operatorSlice";
import { useDispatch } from "react-redux";

export const NavBar = () => {

    const dispatchToggle = useDispatch();
    
    return(
        <div className="nav-body align-centre jstfy-spce-around">
            {true && <i className="fa fa-bars menu-btn margin-Xsmall"
            onClick={() => dispatchToggle(toggler())}
            ></i>
}
            <div className="nav-items jstfy-centre align-centre jstfy-spce-btwn">
                <h1 className="margin-small"><Link to="/"><span className="logo1 padding-small">VIRTUAL</span><span className="logo2">tube</span></Link></h1>
                <button className="login-btn padding-small margin-small">LOGIN</button>
            </div>
        </div>
    )
}
