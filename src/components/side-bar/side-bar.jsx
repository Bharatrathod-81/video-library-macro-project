import "./side-bar.css";
import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SideBar = () => {

    const { toggle } = useSelector(state => state.operators);

    return (
        <div className={toggle ?"side-bar-body flex-column":"remove-sideBar"}>
            <div className="align-start flex-column">
                <h4 className="sideBar-item"><Link to="/"><i className="fa fa-home"></i> HOME</Link></h4>
                <h4 className="sideBar-item"><Link to="/playlist"><i className="fa fa-toggle-right"></i> PLAYLIST</Link></h4>
                <h4 className="sideBar-item"><Link to="likes"><i className="fa fa-thumbs-up"></i> LIKE</Link></h4>
                <h4 className="sideBar-item"><Link to="/watchLater"><i className="fa fa-inbox"></i> WATCH LATER</Link></h4>
                <h4 className="sideBar-item"><Link to="/history"><i className="fa fa-history"></i> HISTORY</Link></h4>
            </div>
        </div>
    )
}

