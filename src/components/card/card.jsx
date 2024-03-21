import { useState } from "react";
import "./card.css";
import ReactPlayer from "react-player";

export const Card = ({ data, hoverCard, setHoverCard }) => {


    const mouseEnterHandler = (e) => {
        e.stopPropagation()
        setHoverCard(data._id)
    };

    const mouseLeaveHandler = () => {
        setHoverCard('')
    };

    return (
        <>
            {data._id !== undefined ?
                <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                    <div className="body">
                        {
                        hoverCard === data._id ?
                            <div className="hoverVideo border-shadow">
                                <ReactPlayer
                                    controls
                                    url={`https://www.youtube.com/watch?v=${data._id}`}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                />
                            </div>
                            :
                            <img className='video-image' src={`https://img.youtube.com/vi/${data._id}/mqdefault.jpg`} alt="video_thumbnail"></img>
                        }
                        <div className="title">{data.title}</div>
                        <div className="creator-name">{data.creator}</div>
                        <span className="views">{data.views}k Views | {data.time}mon ago</span>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}