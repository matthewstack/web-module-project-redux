import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";

import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  movies: movieReducer,
});

export default rootReducer;
