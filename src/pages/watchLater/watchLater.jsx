import "./watchLater.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteWatchLater, getWatchLater } from "../../slices/userSlice";
import { Card } from "../../components/card/card";
import { Link } from "react-router-dom";


export const WatchLater = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWatchLater())
    }, []);

    const { WatchLater } = useSelector(state => state.user);

    return (
        <div className="jstfy-centre flex-wrap">
            {WatchLater.map(item => {
                return (
                    <div
                        key={item._id}
                        className="margin-small watch-card-body ">
                        <Link to={`/singleVideo/${item._id}`}>
                            <Card data={item} />
                        </Link>
                        <button
                            onClick={() => dispatch(deleteWatchLater(item))}
                            className="watch-remove-btn padding-small"
                        >Remove From Watch Later</button>
                    </div>
                )
            })}
        </div>
    )
};

