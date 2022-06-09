import "./allPlaylistCard.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NewPlaylist } from "../newPlaylist/newPlaylist";
import { postVideo } from "../../slices/playListSlice";

export const AllPlaylist = ({ func, video }) => {

  const dispatch = useDispatch();
  const [showNewCard, setShowNewCard] = useState(false);
  const { playlists } = useSelector(state => state.playlist);

  const submitVideo = (playlistId) => {
    dispatch(postVideo({playlistId,video}))
    func(false)
  }

  return (
    <div className='jstfy-centre'>
      <div className='all-playlist-card-body'>
        <div className="margin-small">All Playlists</div>
        <div className="all-playlist-container margin-small">
          {playlists.length < 1 && <div className="margin-small">There Is No Playlist Add New One</div>}
          {playlists.map(item => {
            return (
              <div>
                <button
                  onClick={() => submitVideo(item._id)}
                  className="add-video padding-small">
                  {item.title}
                </button>
              </div>
            )
          })}
        </div>

        {showNewCard && <NewPlaylist func={setShowNewCard} />}

        <button
          onClick={() => setShowNewCard(!showNewCard)}
          className="create-new-playlist padding-small margin-small">
          Create New Playlist
        </button>
      </div>
    </div>
  )
}
