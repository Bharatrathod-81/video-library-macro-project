import "./category-bar.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../slices/videos-slice";

export const CategoryBar = ({ Func }) => {

    const [category, setCategory] = useState("All");
    const [categoryArr, setCategoryArr] = useState([]);

    const dispatch = useDispatch();

    const { videos } = useSelector(state => state.videos);
    
    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])
    
    useEffect(() => {
        const array = videos.reduce((acc, curr) => acc.includes(curr.categoryName) ? acc : [...acc, curr.categoryName], ["All"]);
        setCategoryArr(array);
    }, [videos])

    const selectCategory = (value) => {
        setCategory(value)
        Func(value)
    }

    return (
        <div className="mainContainer">
            <div className="category-bar-body jstfy-start margin-small ">
                {categoryArr.map(item => 
                        <div
                            key={item}
                            className={category === item ? "categories  selected" : "categories "}
                            onClick={() => selectCategory(item)}
                        >{item}
                        </div>
                )}
            </div>
            <hr />
        </div>
    )
};