import "./playList.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deletePlayList } from "../../slices/playListSlice";
import { NewPlaylist } from "../../components/newPlaylist/newPlaylist";
import { Link } from "react-router-dom";



export const PlayList = () => {

    const dispatch = useDispatch();
    const [newPlaylist, setNewPlaylist] = useState(false)
    const { playlists } = useSelector(state => state.playlist);

    return (
        <div className="playlist-body ">
            <div>

                <button
                    className="create-playlist-btn margin-small padding-small"
                    onClick={() => setNewPlaylist(true)}
                >Create New Playlist</button>

            </div>

            {newPlaylist && <NewPlaylist func={setNewPlaylist} />}

            <div>
                {playlists.length > 0 ?
                    <div>
                        <h3>Playlists {playlists.length}</h3>
                        <div className="jstfy-centre flex-wrap">
                            {playlists.map(item => {
                                return (
                                    <Link to={`/playlisting/${item._id}`}>
                                        <div className="playlist-card margin-small padding-small">
                                            <button className="add-video-btn margin-small padding-small"><i class="fa fa-plus"></i></button>
                                            <div className="new-playlist-text ">
                                                <h4>{item.title}</h4>
                                                <p>{item.description}</p>
                                            </div>

                                            <button
                                                onClick={() => dispatch(deletePlayList(item._id))}
                                                className="delete-playlist-btn margin-small">
                                                <i class="fa fa-trash"></i>
                                            </button>

                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    :
                    <h3>There Is No Playlist</h3>
                }
            </div>
        </div>
    )
};