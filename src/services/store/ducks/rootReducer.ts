import { combineReducers } from "redux";
import Course from "./Course/reducer";
import Promotions from "./Promotions/reducer";

const rootReducer = combineReducers({
  Course,
  Promotions,
});

export default rootReducer;
