import "./card.css";

export const Card = ({ data }) => {


    return (
        <div>
            {data._id !== undefined ?
                <div >
                    <img className='video-image' src={`https://img.youtube.com/vi/${data._id}/mqdefault.jpg`} alt="video_thumbnail"></img>
                    <div className="title">{data.title}</div>
                    <div className="creator-name">{data.creator}</div>
                    <span className="views">{data.views}k Views | {data.time}mon ago</span>
                </div>
                :
                <></>
            }
        </div>
    )
}