import "./nav-bar.css";
import { Link } from "react-router-dom";
import { toggler } from "../../slices/operatorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";



export const NavBar = () => {

    const dispatch = useDispatch();
    const { auth, status} = useSelector(state => state.auth);
    const [isLogin, setIslogin] = useState(false)

    
    
    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.info("Successfully Logout")
    }

    return (
        <div className="nav-body align-centre jstfy-spce-around">
            {true && <i className="fa fa-bars menu-btn margin-Xsmall"
                onClick={() => dispatch(toggler())}
            ></i>
            }
            <div className="nav-items jstfy-centre align-centre jstfy-spce-btwn">
                <h1 className="margin-small"><Link to="/"><span className="logo1 padding-small">VIRTUAL</span><span className="logo2">tube</span></Link></h1>
                {localStorage.getItem("user") === null ?
                    <button className="login-btn padding-small margin-small"><Link className="login-btn" to="/login">LOGIN</Link></button>
                    :
                    <button
                        className="login-btn padding-small margin-small"
                        onClick={() => {
                            Logout()
                            setIslogin(!isLogin)
                        }}
                    >LOGOUT</button>
                }
            </div>
        </div>
    )
}
