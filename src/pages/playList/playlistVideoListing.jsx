import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/card/card";
import { Link, useParams } from "react-router-dom";
import { getPlaylists, removePlaylistVideo } from "../../slices/playListSlice";


export const PlaylistVideoListingPage = () => {

    const { videoId } = useParams();
    const dispatch = useDispatch();
    const { playlists } = useSelector(state => state.playlist);
    
    useEffect(() => {
        dispatch(getPlaylists());
    },[playlists])

    const playlist = playlists.find(item => item._id === videoId)


    return (
        <div className="video-listing-body">
            {playlist === undefined ?
                <h4>There Is No Videos Here</h4>
                :
                <div className="card-container jstfy-centre flex-wrap">
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
