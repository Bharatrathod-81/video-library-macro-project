import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import { Link, useParams } from "react-router-dom";
import { getPlaylistVideos, removePlaylistVideo } from "../../slices/playListSlice";


export const PlaylistVideoListingPage = () => {

    const { videoId } = useParams();
    const dispatch = useDispatch();
    const [dependency,setdependency] = useState(false)
    const { playlist } = useSelector(state => state.playlist);

    useEffect(() => {
        dispatch(getPlaylistVideos(videoId));
    },[dependency])


    return (
        <div className="video-listing-body">
            {playlist === undefined ?
                <h4>There Is No Videos Here</h4>
                :
                <div className="card-container jstfy-spce-around flex-wrap">
                    {playlist.videos.map(item => {
                        return (
                            <div
                                key={item._id}
                                className="playlist-card-body">
                                <Link to={`/singleVideo/${item._id}`}>
                                    <Card data={item} />
                                </Link>
                                <button
                                    onClick={() => {
                                        setdependency(!dependency)
                                        dispatch(removePlaylistVideo({ playlist, item }))}
                                    }
                                    className='remove-from-playlist padding-small'>
                                    Remove From Playlist
                                </button>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
};