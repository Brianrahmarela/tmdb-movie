import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ResultCard from "./ResultCard";

const Watchlist = () => {
	const { watchlist } = useContext(GlobalContext);

	return (
		<div className="flex justify-center">
			<div>
				<h1 className="flex font-bold text-2xl justify-center pt-20">My Watchlist</h1>
				<span className="flex font-bold text-2xl justify-center count-pill">
					{watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
				</span>
				{watchlist.length > 0 ? (
					<div className="grid grid-flow-row auto-cols-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 justify-center">
						{watchlist.map((movie) => (
							<ResultCard movie={movie} key={movie.id} type="watchlist" />
						))}
					</div>
				) : (
					<h2 className="no-movies">No movies in your list! Add some!</h2>
				)}
			</div>
		</div>
	);
};

export default Watchlist;
