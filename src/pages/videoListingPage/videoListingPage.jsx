import "./videoListingPage.css";
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { CategoryBar } from "../../components/category-bar/category-bar";
import { Card } from "../../components/card/card";
import { Link, useParams } from "react-router-dom";


export const VideoListingPage = () => {

    const { videoId } = useParams();
    const [category, setCategory] = useState('All');
    const [allVideosList, setAllVideoList] = useState([]);
    const [hoverCard, setHoverCard] = useState('');
    const { videos } = useSelector(state => state.videos);

    

    useEffect(() => {
        setAllVideoList(videos);

        if (category !== "All") {
            const filterArr = videos.filter(item => item.categoryName === category);

            setAllVideoList(filterArr);
        }
    },[category, videos])

    
    return (
        <div className="video-listing-body">
            <CategoryBar Func={setCategory} />
            <div className="card-container">
                {allVideosList.map(item => {
                    return (
                        <div
                            key={item._id}
                            className="card-body">
                            <Link to={`/singleVideo/${item._id}`}>
                                <Card data={item} hoverCard={hoverCard} setHoverCard={setHoverCard}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};