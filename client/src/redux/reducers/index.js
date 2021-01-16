import { combineReducers } from "redux";
import userReducer from "./userReducer";
import playReducer from "./playReducer";

export default combineReducers({
  userState: userReducer,
  playState: playReducer
});
