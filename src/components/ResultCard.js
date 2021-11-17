import React from "react";
import { useNavigate } from "react-router";
import { getDetailMovies } from "../redux/actions/movieDetail.actions";
import { useDispatch } from "react-redux";


function ResultCard({movie}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const handleDetail = (e) => {
    console.log(e.target)
    dispatch(getDetailMovies(movie.id));
    dispatch(getDetailMovies(movie.id));
    navigate("/detail");
  }
  return (
    <div className="result-card bg-white card-movie p-2" onClick={handleDetail}>
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h3 className="releasedate">{movie.release_date}</h3>
        </div>

      </div>
    </div>
  )
}

export default ResultCard
