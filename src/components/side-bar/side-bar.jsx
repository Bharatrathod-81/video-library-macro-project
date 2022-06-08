import "./side-bar.css";
import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideBar = () => {

    const { toggle } = useSelector(state => state.operators);

    return (
        <div className={toggle ?"side-bar-body flex-column":"remove-sideBar"}>
            <div className="align-start flex-column">
                <h4 className="sideBar-item"><i className="fa fa-home"></i> HOME</h4>
                <h4 className="sideBar-item"><Link to="/playPage/All"><i className="fa fa-tv"></i> EXPLORE</Link></h4>
                <h4 className="sideBar-item"><i className="fa fa-toggle-right"></i> PLAYLIST</h4>
                <h4 className="sideBar-item"><i className="fa fa-thumbs-up"></i> LIKE</h4>
                <h4 className="sideBar-item"><i className="fa fa-inbox"></i> WATCH LATER</h4>
                <h4 className="sideBar-item"><i className="fa fa-history"></i> HISTORY</h4>
            </div>
        </div>
    )
}

