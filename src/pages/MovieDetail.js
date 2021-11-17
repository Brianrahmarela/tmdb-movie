import Layout from '../components/layout';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const MovieDetail = () => {
  const detailMovie = useSelector((state) => state.moviesDetailReducers.movieDetails);
  console.log(detailMovie);

  return (
    <>
      <Layout>
        <main className="px-4">
          <div className="py-10 md:h-screen">
            <Link to="/">
              <span className="text-xl font-bold">
                Back
              </span>
              <div className="flex flex-col items-center my-10 md:flex-row ">         
                <img src={`https://image.tmdb.org/t/p/w200${detailMovie.poster_path}`} alt={`${detailMovie.title} Poster`} className="object-cover rounded-xl w-80 mx-auto h-96"/>
                <div className="flex flex-col md:ml-4 md:w-1/2 mt-10">
                  <p className="font-bold text-3xl my-1">
                    {detailMovie.title}
                  </p>                 
                  <p className="font-regular text-md my-1">
                  <span className="font-semibold">Release date: </span>{detailMovie.release_date}
                  </p>                 
                  <p className="font-regular text-md my-1">
                  <span className="font-semibold">Status:</span> {detailMovie.status}
                  </p>                 
                  <p className="font-regular text-md my-1">
                  <span className="font-semibold">Genre:</span> {detailMovie.genres === undefined ? <></> : detailMovie.genres.map((item, idx) => <span key={idx}>{item.name}, </span>)}
                  </p>                 
                  <p className="font-regular text-md my-1">
                  <span className="font-semibold">Languages:</span> {detailMovie.spoken_languages === undefined ? <></> : detailMovie.spoken_languages.map((item, idx) => <span key={idx}>{item.name}, </span>)}
                  </p>                 
                  <p className="font-regular text-md my-1">
                  <span className="font-semibold">Production Companies:</span> {detailMovie.production_companies === undefined ? <></> : detailMovie.production_companies.map((item, idx) => <span key={idx}>{item.name}, </span>)}
                  </p>                 
                  <p className="font-regular text-md my-1">
                  <span className="font-semibold">Tagline:</span> {detailMovie.tagline}
                  </p>                 
                  <p className="font-regular text-md my-1">
                  <span className="font-semibold">Overview:</span> {detailMovie.overview}
                  </p>                 
                </div>
              </div>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default MovieDetail
