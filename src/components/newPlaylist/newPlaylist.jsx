import React, { useState } from 'react';
import "./newPlaylist.css";
import { useDispatch } from 'react-redux';
import { postNewPlayList } from '../../slices/playListSlice';


export const NewPlaylist = ({func}) => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value });
    }

    const SubmitNewPlaylist = () => {
        dispatch(postNewPlayList(inputValue));
        func(false);
    }

    return (
        <div className="jstfy-centre">
            <div className="add-playlist-card align-centre flex-column padding-small">

                <label for="title-input" >TITLE</label>
                <input
                    className="title-input padding-small"
                    name="title"
                    type="text"
                    onChange={e => inputHandler(e)}
                />

                <label>DESCRIPTION</label>
                <input
                    className="description-input padding-small"
                    name="description"
                    type="text"
                    onChange={e => inputHandler(e)}
                />

                <div>
                    <button
                        onClick={SubmitNewPlaylist}
                        className="add-playlist-btn margin-small">ADD</button>
                    <button
                        onClick={() => func(false)}
                        className="add-playlist-btn">CANCEL</button>
                </div>

            </div>
        </div>
    )
}
