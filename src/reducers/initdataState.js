import { INIT_DATA_STATE } from "../actions/shared";

export const initDataState = (state = "false", action) => {
  switch (action.type) {
    case INIT_DATA_STATE:
      return action.state;
    default:
      return state;
  }
};
