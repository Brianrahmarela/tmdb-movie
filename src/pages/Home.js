import React, {useEffect, useState} from 'react';
//component
import ResultCard from "../components/ResultCard"
const axios = require('axios');

function Home() {
  const [dataApi, setdataApi] = useState('');
  const [results, setResults] = useState([]);
  console.log('RESULTS', results)
  console.log(dataApi);
  const handleChange = (e) => {
    e.preventDefault();
    setdataApi(e.target.value)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b43ffdc7beb600742db100df024dd5e0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    // .then((res) => res.json())
    .then((data) => setResults(data.data.results))
    .catch((err) => console.log(err))
  
  }

  return (
    <div>
      <input type="text" placeholder="search movie" value={dataApi} onChange={handleChange}/>
      {
        results.length > 0 && (
          <ul className="results" style={{listStyleType:"none"}}>
            {results.map((movie) => (
              <li key={movie.id} >
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
