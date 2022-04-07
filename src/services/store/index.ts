import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./ducks/rootReducer";
import { Course } from "./ducks/Course/types";

// export interface ApplicationState {
//     Course: CourseState;
//     Promotions: PromotionsState;
// }

const store = createStore(rootReducer);
