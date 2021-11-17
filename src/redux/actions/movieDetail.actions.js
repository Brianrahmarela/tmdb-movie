import axios from "axios";

export const MOVIEDETAIL_LOADING = "MOVIEDETAIL_LOADING";
export const MOVIEDETAIL_SUCCESS = "MOVIEDETAIL_SUCCESS";
export const MOVIEDETAIL_ERROR = "MOVIEDETAIL_ERROR";

export const DetailMoviesLoading = () => {
  return {
    type: MOVIEDETAIL_LOADING
  };
};
export const DetailMoviesSuccess = (result) => {
  console.log('tes',result)
  return {
    type: MOVIEDETAIL_SUCCESS,
    result
  };
};
export const DetailMoviesError = (error) => {
  return {
    type: MOVIEDETAIL_ERROR,
    error
  };
};

export const getDetailMovies = (id) => {
  console.log('sampe di getDetailMovies', id)
  return function(dispatch) {
    
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b43ffdc7beb600742db100df024dd5e0`)
    .then((result) => dispatch(DetailMoviesSuccess(result.data)))
    .catch((err) => console.log(err))
  };
};