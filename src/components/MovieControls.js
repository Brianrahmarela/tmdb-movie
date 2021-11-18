import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEyeSlash, faTimes} from '@fortawesome/free-solid-svg-icons';

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls mt-2">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn mr-2" onClick={() => addMovieToWatched(movie)}>
            <FontAwesomeIcon icon={faEyeSlash} size="lg"></FontAwesomeIcon>

          </button>
          <button
            className="ctrl-btn "
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
           <FontAwesomeIcon icon={faTimes} size="lg"></FontAwesomeIcon>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <FontAwesomeIcon icon={faEyeSlash} size="lg"></FontAwesomeIcon>
          </button>

          <button
            className="ctrl-btn "
            onClick={() => removeFromWatched(movie.id)}
          >
           <FontAwesomeIcon icon={faTimes} size="lg"></FontAwesomeIcon>
          </button>
        </>
      )}
    </div>
  );
};