import "./watchLater.css";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteWatchLater, getWatchLater } from "../../slices/userSlice";
import { Card } from "../../components/card/card";


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
                    <Link to={`/singleVideo/${item._id}`}>
                        <div
                            key={item._id}
                            className="margin-small watch-card-body ">
                            <Card data={item} />
                            <button
                                onClick={() => dispatch(deleteWatchLater(item))}
                                className="watch-remove-btn padding-small"
                            >Remove From Watch Later</button>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
};

