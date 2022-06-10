import "./like-page.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {  getLikes, removeLikes } from "../../slices/userSlice";
import { Card } from "../../components/card/card";
import { Link } from "react-router-dom";


export const Like = () => {

    const dispatch = useDispatch();
    const { likes } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getLikes())
    }, [likes]);


    return (
        <div className="jstfy-centre flex-wrap">
            {likes.map(item => {
                return (
                    <div
                        key={item._id}
                        className="margin-small likes-card-body ">
                        <Link to={`/singleVideo/${item._id}`}>
                            <Card data={item} />
                        </Link>
                        <button
                            onClick={() => dispatch(removeLikes(item))}
                            className="likes-remove-btn padding-small"
                        >Remove From Likes</button>
                    </div>
                )
            })}
        </div>
    )
};
