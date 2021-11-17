import {
  MOVIEDETAIL_LOADING,
  MOVIEDETAIL_SUCCESS,
  MOVIEDETAIL_ERROR,
} from "../actions/movieDetail.actions";

const initialState = {
  loading: false,
  movieDetails: {},
};

const moviesDetailReducers = (state = initialState, action) => {
  console.log('reducers detail sukses',state)
  switch(action.type) {
    case MOVIEDETAIL_LOADING: 
      return {
        loading: true
      }
    case MOVIEDETAIL_SUCCESS:
      return {
        loading: false,
        ...state,
        movieDetails: action.result
      }
    case MOVIEDETAIL_ERROR:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default moviesDetailReducers;