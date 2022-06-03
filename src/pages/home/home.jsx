import "./home.css";
import { CategoryBar } from "../../components/category-bar/category-bar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getVideos } from "../../slices/videos-slice";
import { Card } from "../../components/card/card";

export const Home = () => {

    const [category, setCategory] = useState("All");

    const dispatch = useDispatch();
    const { videos } = useSelector(state => state.videos);

    let categories = videos.reduce((acc, curr) =>
        acc[acc.length - 1].categoryName === curr.categoryName ? acc : [...acc, curr], [{}]);

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    return (
        <div className="home-body flex-grow">
            <CategoryBar Func={setCategory} />
            <div>
                <div className="image-body">
                    <img className="image" src="./images/video-library.png" alt="home-page image" />
                    <button className="watch-btn padding-small">WATCH NOW</button>
                </div>
                <div className="card-container jstfy-centre flex-wrap">
                    {categories.slice(1).map(item => {
                        return (
                            <div key={item._id} className="card-body  margin-small">
                                <Card data={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}