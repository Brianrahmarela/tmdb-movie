import { combineReducers } from "redux";
import moviesReducers from '../reducers/movieList.reducers';
import moviesDetailReducers from '../reducers/movieDetail.reducers'

const rootReducers = combineReducers({moviesDetailReducers, moviesReducers})
export default rootReducers;