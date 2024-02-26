import "./nav-bar.css";
import { Link } from "react-router-dom";
import { toggler } from "../../slices/operatorSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOutHandler } from "../../slices/authSlice";



export const NavBar = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    return (
        <div className="main-body">
            <div className="nav-body align-centre jstfy-spce-around">
                    {true && <i className="fa fa-bars menu-btn margin-Xsmall"
                        onClick={() => dispatch(toggler())}
                    ></i>
                    }
                    <div className="nav-items jstfy-centre align-centre jstfy-spce-btwn">
                        <h1 className="margin-small"><Link to="/"><span className="logo1 ">VIRTUAL</span><span className="logo2">tube</span></Link></h1>
                        {user ?
                            <button
                            className="login-btn padding-small margin-small"
                            onClick={() => {
                                dispatch(logOutHandler())
                            
                            }}
                            >LOGOUT</button>
                            :
                            <button className="login-btn padding-small margin-small"><Link className="login-btn" to="/login">LOGIN</Link></button>
                        }
                    </div>
            </div>
        </div>
    )
}
