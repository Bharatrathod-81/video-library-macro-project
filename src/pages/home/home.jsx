import "./home.css";
import { CategoryBar } from "../../components/category-bar/category-bar";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

    const [category, setCategory] = useState("none");

    return (
        <div className="home-body flex-grow">
            <CategoryBar Func={setCategory} />
            <div className="image-body">
                <img className="image" src="./images/video-library.png" alt="home-page image" />
                <button className="watch-btn padding-small"><Link to="/playPage/All">WATCH NOW</Link></button>
            </div>
        </div>
    )
}