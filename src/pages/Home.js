import React, {useEffect, useState} from 'react';
//component
import ResultCard from "../components/ResultCard"
import { useSelector, useDispatch } from "react-redux";
import {
  emptyMovie,
  getMovieList,
} from "../redux/actions/movieList.actions";
const axios = require('axios');

function Home() {
  const dispatch = useDispatch();
  const ListMovie = useSelector((state) => state.moviesReducers.movies);
  console.log('HASIL API REDUCER', ListMovie)
  const [titleMovie, setTitleMovie] = useState("");
  const [results, setResults] = useState([]);
  console.log('RESULTS', results)
  console.log(titleMovie);
  useEffect(() => {
    dispatch(getMovieList(titleMovie));
  }, [dispatch, titleMovie]);

  const handleChange = (e) => {
    setTitleMovie(e.target.value)
    dispatch(emptyMovie());
    // axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b43ffdc7beb600742db100df024dd5e0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    // .then((data) => setResults(data.data.results))
    // .catch((err) => console.log(err))
  
  }

  return (
    <div>
      <input type="text" placeholder="search movie" value={titleMovie} onChange={handleChange}/>
      {
        ListMovie.length > 0 && (
          <ul className="results" style={{listStyleType:"none"}}>
            {ListMovie.map((movie, idx) => (
              <li key={idx} >
                <ResultCard movie={movie}/>
              </li>
            ))
            }
          </ul>
      )}
    </div>
  )
}

export default Home
