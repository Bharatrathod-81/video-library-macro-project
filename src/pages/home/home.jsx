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

    let filteredVideos = videos;
    if (category !== "All") {
        filteredVideos = videos.filter(item => item.categoryName === category)
    }

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    return (
        <>
            <CategoryBar Func={setCategory} />
            <div className="home-body">
                <div className="image-body">
                    <img className="image" src="./images/video-library.png" alt="home-page image" />
                    <button className="watch-btn padding-small">WATCH NOW</button>
                </div>
                <div className="card-container flex-row">
                    {videos.map(item => {
                        return (
                            <div className="card-body margin-small">
                                <Card data={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}