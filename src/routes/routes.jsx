import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";



export const RoutesFunc = () => {

    return(
        <div className="margin-small">
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        </div>
    )
};