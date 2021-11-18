import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ResultCard from "./ResultCard";

 const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
		<div className="flex justify-center">
      <div>
				<h1 className="flex font-bold text-2xl justify-center pt-20">Watched Movies</h1>

          <span className="flex font-bold text-2xl justify-center count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>

        {watched.length > 0 ? (
					<div className="grid grid-flow-row auto-cols-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 justify-center">
          {watched.map((movie) => (
              <ResultCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;