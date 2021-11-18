import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router";
import { getDetailMovies } from "../redux/actions/movieDetail.actions";
import { useDispatch } from "react-redux";


function ResultCard({movie}) {
  const {
    addMovieToWatchlist,
    watchlist,
   } = useContext(GlobalContext);
  console.log(watchlist)
  console.log("movie id", movie.id)
  
  let storedMovie = watchlist.find((o) =>  o.id === movie.id);
  console.log(storedMovie)
  // let storedMovie = watchlist.find(o => co.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;
  console.log('watchlistDisabled',watchlistDisabled)

// const watchedDisabled = storedMovieWatched ? true : false;
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
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h3 className="releasedate">{movie.release_date.substring(0,4)}</h3>
        </div>
        <div className="control">
          { watchlistDisabled === true ? (

            <button className="btn bg-gray-400 text-white p-2" 
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}>ADD TO WATCHLIST</button>
            ) : (
            <button className="btn bg-green-600 text-white p-2" 
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}>ADD TO WATCHLIST</button>
          )

          }
        </div>

      </div>
    </div>
  )
}

export default ResultCard
