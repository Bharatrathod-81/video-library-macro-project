import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { SideBar } from "../components/side-bar/side-bar";




export const RoutesFunc = () => {

    return (
        <div className=" flex-row">
            <div>
                <SideBar/>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
};