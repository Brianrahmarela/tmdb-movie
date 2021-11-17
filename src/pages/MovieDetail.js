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
                <div className="flex flex-col md:ml-4 md:w-1/2">
                  <h1 className="font-bold text-2xl my-1">
                    {detailMovie.title}
                  </h1>                 
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
