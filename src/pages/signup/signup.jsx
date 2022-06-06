import "./signup.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SignupValidChecker } from "../../utils/MailPasswordChecker";
import { useDispatch } from "react-redux";
import { getSignUp } from "../../slices/authSlice";


export const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({ isError: true });
    const [userDetail, setUserDetail] = useState({
        fastname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const signupDispatch = useDispatch();

    useEffect(() => {
        if (!error.isError) {
            signupDispatch(getSignUp(userDetail));
        }
    }, [error]);

    const submitFunc = () => {
        const error = SignupValidChecker(userDetail);
        setError(error);
    }

    const inputHandler = (e) => {
        const { name, value } = e;
        setUserDetail({ ...userDetail, [name]: value });
    };

    return (
        <div className="main-body">
            <form
                className="signup-body"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="signup-container">
                    <div className="signup-heading">
                        <h2>Signup</h2>
                    </div>

                    <div className="name-input-container">
                        <label for="name-input">Full Name</label>
                        <input
                            onChange={e => inputHandler(e.target)}
                            name="firstname"
                            className="name-input"
                            type="text"
                            required
                            placeholder="Enter First Name" />
                    </div>
                    {error.firstname && <div className="wrong-input">{error.firstname}</div>}

                    <div className="name-input-container">
                        <label for="name-input">Last Name</label>
                        <input
                            onChange={e => inputHandler(e.target)}
                            name="lastname"
                            className="name-input"
                            type="text"
                            required
                            placeholder="Enter"
                        />
                    </div>
                    {error.lastname && <div className="wrong-input">{error.lastname}</div>}

                    <div className="email-input-container">
                        <label for="email-input">Email address</label>
                        <input
                            onChange={e => inputHandler(e.target)}
                            name="email"
                            className="email-input"
                            type="text"
                            required
                            placeholder="xyz@gmail.com"
                        />
                    </div>
                    {error.email && <div className="wrong-input">{error.email}</div>}

                    <div className="email-input-container">
                        <label for="Password-input">Password</label>
                        <div className="password-container">
                            <input
                                onChange={e => inputHandler(e.target)}
                                name="password"
                                className="Password-input"
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="***************" 
                            />
                            <button
                                className="show-password-Btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >Show</button>
                        </div>
                        {error.password && <div className="wrong-input">{error.password}</div>}


                    </div>
                    <div className="email-input-container">
                        <label for="Password-input">Confirm Password</label>
                        <div className="password-container">
                            <input
                                onChange={e => inputHandler(e.target)}
                                name="confirmpassword"
                                className="Password-input"
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="***************"
                            />
                            <button
                                className="show-password-Btn"
                                onClick={() => setShowPassword(!showPassword)}
                            >Show</button>
                        </div>
                        {error.confirmpassword && <div className="wrong-input">{error.confirmpassword}</div>}

                    </div>
                    <div className="forgot-password">
                        <div>
                            <input className="rememberMe-input" type="checkbox" />
                            <label for="rememberMe-input">I accept all Terms & Conditions</label>
                        </div>
                    </div>
                    <div className="email-input-container">
                        <button
                            onClick={submitFunc}
                            className="signup-Btn"
                        >Create New Account</button>
                    </div>
                    <Link to="/login" className="new-account">
                        Already have an account
                    </Link>
                </div>
            </form>
        </div>
    );
};
