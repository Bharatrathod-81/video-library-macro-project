import { useState } from "react";
import { useSelector } from "react-redux";
import "./category-bar.css";

export const CategoryBar = ({ Func }) => {

    const [category, setCategory] = useState("All")

    const { videos } = useSelector(state => state.videos);
    const categoryArr = videos.reduce((acc, curr) => acc.includes(curr.categoryName) ? acc : [...acc, curr.categoryName], ["All"]);

    const selectCategory = (value) => {
        setCategory(value)
        Func(value)
    }

    return (
        <>
            <hr />
            <div className="category-bar-body  jstfy-start">
                {categoryArr.map(item => <button
                    key={item}
                    className={category === item ? "categories padding-small selected" : "categories padding-small"}
                    onClick={() => selectCategory(item)}
                >{item}</button>)}
            </div>
            <hr />
        </>
    )
};