import axios from "axios";

export const MOVIE_LOADING = "MOVIE_LOADING";
export const MOVIE_SUCCESS = "MOVIE_SUCCESS";
export const MOVIE_ERROR = "MOVIE_ERROR";
export const EMPTY_MOVIE = "EMPTY_MOVIE";
export const MORE_MOVIE = "MORE_MOVIE";

export const MovieLoading = () => {
  return {
    type: MOVIE_LOADING
  };
};
export const MovieSuccess = (result) => {
  return {
    type: MOVIE_SUCCESS,
    result
  };
};
export const MovieError = (error) => {
  return {
    type: MOVIE_ERROR,
    error
  };
};

export const emptyMovie = () => {
  return {
    type: EMPTY_MOVIE
  };
};

export const moreMoview = () => {
  return {
    type: MORE_MOVIE
  };
};

export const getMovieList = (title) => {
  console.log("title yg dicari sampe di action", title);

  return function (dispatch) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b43ffdc7beb600742db100df024dd5e0&language=en-US&page=1&include_adult=false&query=${title}`)
    .then((result) => dispatch(MovieSuccess(result.data.results)))
    .catch((err) => console.log(err))
  };
};
