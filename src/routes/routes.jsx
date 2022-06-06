import { Routes, Route } from "react-router-dom";
import { SideBar } from "../components/side-bar/side-bar";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { SignUp } from "../pages/signup/signup";




export const RoutesFunc = () => {

    return (
        <div className=" flex-row">
            <div>
                <SideBar/>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    )
};