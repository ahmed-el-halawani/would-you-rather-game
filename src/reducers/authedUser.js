import { SET_AUTHED_USER, LOGOUT_AUTHED_USER } from "../actions/users";

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
};
