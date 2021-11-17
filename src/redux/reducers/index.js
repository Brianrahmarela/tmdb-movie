import { combineReducers } from "redux";
import moviesReducers from '../reducers/movieList.reducers';

const rootReducers = combineReducers({moviesReducers})
export default rootReducers;