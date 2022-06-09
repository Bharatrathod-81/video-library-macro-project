import "./videoListingPage.css";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { CategoryBar } from "../../components/category-bar/category-bar";
import { Card } from "../../components/card/card";
import { Link, useParams } from "react-router-dom";
import { getPlaylists } from "../../slices/playListSlice";


export const VideoListingPage = () => {

    const { videoId } = useParams();
    const dispatch = useDispatch();
    const [category, setCategory] = useState(videoId);
    const { videos } = useSelector(state => state.videos);
    const { playlists } = useSelector(state => state.playlist);

    useEffect(() => {
        dispatch(getPlaylists());
    },[dispatch])

    let filterArr = videos;
    
    if (category !== "All") {
        filterArr = videos.filter(item => item.categoryName === category)
    }
    

    return (
        <div className="video-listing-body">
            <CategoryBar Func={setCategory} />
            <div className="card-container jstfy-spce-around flex-wrap">
                {filterArr.map(item => {
                    return (
                        <div
                            key={item._id}
                            className="card-body">
                            <Link to={`/singleVideo/${item._id}`}>
                                <Card data={item} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};