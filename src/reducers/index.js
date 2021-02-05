import { combineReducers } from "redux";
import { questions } from "./questions";
import { users } from "./users";
import { authedUser } from "./authedUser";
import { initDataState } from "./initdataState";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  loadingBar: loadingBarReducer,
  questions,
  users,
  authedUser,
  initDataState,
});
