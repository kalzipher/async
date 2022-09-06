import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";
import rickAndMortyReducer from "./RickAndMorty/rick.reducer"

const rootReducer = combineReducers({
  counter: counterReducer,
  rick: rickAndMortyReducer
});

export default rootReducer;
