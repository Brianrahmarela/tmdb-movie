import {
  MOVIE_LOADING,
  MOVIE_SUCCESS,
  MOVIE_ERROR,
  EMPTY_MOVIE,
  MORE_MOVIE
} from "../actions/movieList.actions";

const initialState = {
  loading: false,
  movies: [],
};

const moviesReducers = (state = initialState, action) => {
  console.log("STATE REDUCER", state.movies);
  // console.log("ACTION REDUCER", action);
  switch (action.type) {
    case EMPTY_MOVIE:
      console.log('action Empty movie', action.result);
      return {
        movies: [],
        loading: true
      };
    case MOVIE_LOADING:
      return {
        ...state,
        loading: true
      };
    case MOVIE_SUCCESS:

      return {
        loading: false,
        movies: [...state.movies, ...action.result],
      };
    case MORE_MOVIE:
      return {
        movies: [...state.movies,...state.moviesTemp],
      };
    case MOVIE_ERROR:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default moviesReducers;
