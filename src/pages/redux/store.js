import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

const appReducer = combineReducers({
  todoReducer,
});

export default createStore(appReducer);
