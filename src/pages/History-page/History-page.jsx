import "./History-page.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getHistory, removeAllHistoryVideo, removeHistoryVideo } from "../../slices/userSlice";
import { Card } from "../../components/card/card";
import { Link } from "react-router-dom";


export const History = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHistory())
    }, []);

    const { history } = useSelector(state => state.user);

    return (
        <div className="history-body">
            <button
                onClick={() => dispatch(removeAllHistoryVideo())}
                className="remove-all-history padding-small margin-small">
                Remove All
            </button>
            <div className="jstfy-centre flex-wrap">
                {history.map(item => {
                    return (
                        <div
                            key={item._id}
                            className="margin-small history-card-body ">
                            <Link to={`/singleVideo/${item._id}`}>
                                <Card data={item} />
                            </Link>
                            <button
                                onClick={() => dispatch(removeHistoryVideo(item._id))}
                                className="history-remove-btn padding-small"
                            >Remove From History</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
