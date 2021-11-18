import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router";
import { getDetailMovies } from "../redux/actions/movieDetail.actions";
import { useDispatch } from "react-redux";
import { MovieControls } from "./MovieControls";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus,} from '@fortawesome/free-solid-svg-icons';

function ResultCard({movie, type}) {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
   } = useContext(GlobalContext);
  console.log(watchlist)
  console.log("movie id", movie.id)
  
  let storedMovie = watchlist.find((o) =>  o.id === movie.id);
  console.log(storedMovie)
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const handleDetail = (e) => {
    console.log(e.target)
    dispatch(getDetailMovies(movie.id));
    dispatch(getDetailMovies(movie.id));
    navigate("/detail");
  }
  return (
    <div className="result-card bg-white card-movie p-2" >
      <div className="poster-wrapper">

        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} onClick={handleDetail}/>
        ) : (
          <div className="filler-poster"></div>
        )}
        <MovieControls type={type} movie={movie}/>
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title font-bold mt-2 text-md">{movie.title}</h3>
          <h3 className="releasedate">{movie.release_date.substring(0,4)}</h3>
        </div>
        <div className="control">
          <>

          { watchlistDisabled === true ? (
            <button className="btn bg-disabled text-white p-2 my-2 rounded-md" 
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}>ADD TO WATCHLIST</button>
            ) : (
            <button className="btn bg-green text-white p-2 my-2 rounded-md" 
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}><FontAwesomeIcon icon={faPlus} className="pr-1"></FontAwesomeIcon>
            ADD TO WATCHLIST</button>
          )
          }

          { watchedDisabled === true ? (
            <button className="btn bg-disabled text-white p-2 rounded-md"  
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}>ADD TO WATCHED</button>
            ) : (
            <button className="btn bg-green text-white p-2 rounded-md" 
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}><FontAwesomeIcon icon={faPlus} className="pr-1"></FontAwesomeIcon>ADD TO WATCHED</button>
          )
          }
          </>
        </div>

      </div>
    </div>
  )
}

export default ResultCard
