import React, { useEffect, useState } from "react";
//component
import ResultCard from "../components/ResultCard";
import Layout from "../components/layout";

import { useSelector, useDispatch } from "react-redux";
import { emptyMovie, getMovieList } from "../redux/actions/movieList.actions";

function Home() {
	const dispatch = useDispatch();
	const { movies, loading } = useSelector((state) => state.moviesReducers);
	console.log("HASIL API REDUCER", movies);
	const [titleMovie, setTitleMovie] = useState("");

	console.log(titleMovie);
	useEffect(() => {
		dispatch(getMovieList(titleMovie));
		// window.addEventListener('scroll', () => {
    //   const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //   const scrolled = window.scrollY;
    //   if(scrolled === scrollable) {
    //     setPagePerTitle(prev => prev + 1)
    //   }
    // })
	}, [dispatch, titleMovie]);

	const handleChange = (e) => {
		setTitleMovie(e.target.value);
		dispatch(emptyMovie());
		// axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b43ffdc7beb600742db100df024dd5e0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
		// .then((data) => setResults(data.data.results))
		// .catch((err) => console.log(err))
	};

	return (
		<>
			<Layout>
      <main className="py-16 mx-6">
				<input
					type="text"
					placeholder="search movie"
					value={titleMovie}
					onChange={handleChange}
					className="border border-green-400 rounded-xl w-full py-2 px-4 focus:outline-none text-green-500"
				/>
				{movies.length > 0 && (
          <div className="grid grid-flow-row auto-cols-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 justify-center">
						{movies.map((movie, idx) => (
							<div key={idx} className="justify-center flex">
								<ResultCard movie={movie} />
							</div>
						))}
						{loading && <h2>loading...</h2>}

          </div>
				)}
        </main>
			</Layout>
		</>
	);
}

export default Home;
