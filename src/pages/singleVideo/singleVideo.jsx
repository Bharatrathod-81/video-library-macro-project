import "./singleVideo.css"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from "../../slices/videos-slice";
import { Link, useParams } from "react-router-dom";
import { postHistory, postLikes, postWatchLater } from "../../slices/userSlice";
import ReactPlayer from "react-player";
import { AllPlaylist } from "../../components/allPlaylistCard/allPlaylistCard";


export const SingleVideo = () => {

    const { videoId } = useParams();
    const dispatch = useDispatch();
    const [showPlaylist, setShowPlaylist] = useState(false);

    useEffect(() => {
        dispatch(getVideos());
    }, [videoId]);

    const { videos, loading } = useSelector(state => state.videos);

    let findVideo = {}

    if (videos[0] !== undefined) {
        findVideo = videos.find(item => item._id === videoId);
    }


    return (
        <div className="video-page-body margin-small">
            {loading || videos[0] === undefined ?
                <h2>Loading...</h2>
                :
                
                <div className="jstfy-centre flex-wrap single-video-body">
                    <div className="video-frame flex-column flex-grow">
                        <div className="video-player">
                            <ReactPlayer
                                controls
                                url={`https://www.youtube.com/watch?v=${findVideo._id}`}
                                width="100%"
                                height="100%"
                                onPlay={() => dispatch(postHistory(findVideo))}
                            />

                            <div className="feature-container jstfy-spce-btwn flex-column">
                                <div
                                    onClick={() => dispatch(postWatchLater(findVideo))}
                                    className="watch-later flex-column align-centre jstfy-centre">
                                    <div className="watch-later-btn"><i class="fa fa-clock-o"></i></div>
                                    <div className="feature-texts">Watch Later</div>
                                </div>

                                <div
                                    onClick={() => setShowPlaylist(!showPlaylist)}
                                    className="playlist flex-column align-centre jstfy-centre">
                                    <div className="playlist-btn"><i class="fa fa-plus"></i></div>
                                    <div className="feature-texts">PlayList</div>
                                </div>

                                <div 
                                onClick={() => dispatch(postLikes(findVideo))}
                                className="like flex-column align-centre jstfy-centre">
                                    <div className="like-btn"><i class="fa fa-thumbs-up"></i></div>
                                    <div className="feature-texts">Like</div>
                                </div>
                            </div>
                        </div>

                        {showPlaylist && <AllPlaylist func={setShowPlaylist} video={findVideo}/>}

                        <div className="video-discription margin-small">
                            <h3>{findVideo.title}</h3>
                            <p>{findVideo.description}</p>
                            <p>Creator : <h4 className="creator">{findVideo.creator}</h4></p>
                        </div>

                    </div>

                    <div>
                        {videos.map(item => {
                            if (item.categoryName === findVideo.categoryName) {
                                return (
                                    <Link
                                        key={item._id}
                                        to={`/singleVideo/${item._id}`}>
                                        <div className="card-Body jstfy-centre margin-small">
                                            <img className='sidevideo-image' src={`https://img.youtube.com/vi/${item._id}/mqdefault.jpg`} alt="video_thumbnail"></img>
                                            <div className="video-texts jstfy-centre flex-column">
                                                <div className="title">{item.title}</div>
                                                <div className="creator-name">{item.creator}</div>
                                                <span className="views">{item.views}k Views | {item.time}mon ago</span>
                                            </div>

                                        </div>
                                    </Link>
                                )
                            }
                        })}
                    </div>
                </div>

            }
        </div>
    )
};
