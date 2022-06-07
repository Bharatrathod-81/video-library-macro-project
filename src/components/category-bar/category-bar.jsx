import "./category-bar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../slices/videos-slice";
import { Link } from "react-router-dom";

export const CategoryBar = ({ Func }) => {

    const [category, setCategory] = useState("All")

    const dispatch = useDispatch();

    const { videos } = useSelector(state => state.videos);
    const categoryArr = videos.reduce((acc, curr) => acc.includes(curr.categoryName) ? acc : [...acc, curr.categoryName], ["All"]);

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    const selectCategory = (value) => {
        setCategory(value)
        Func(value)
    }

    return (
        <div>
            <hr />
            <div className="category-bar-body jstfy-start margin-small">
                {categoryArr.map(item => 
                    <Link to={`/playPage/${item}`}>
                        <button
                            key={item}
                            className={category === item ? "categories padding-small selected" : "categories padding-small"}
                            onClick={() => selectCategory(item)}
                        >{item}
                        </button>
                    </Link>
                )}
            </div>
            <hr />
        </div>
    )
};