export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";
export const SAVE_USER_QUESTION_ANSWER = "SAVE_USER_QUESTION_ANSWER";
export const RESET_USER_QUESTION_ANSWER = "RESET_USER_QUESTION_ANSWER";

export const getUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const setAuthedUser = (authedUser) => ({
  type: SET_AUTHED_USER,
  authedUser,
});

export const logOutAuthedUser = () => ({
  type: LOGOUT_AUTHED_USER,
});

export const saveUserQuestionAnswer = ({ authedUser, qid, answer }) => ({
  type: SAVE_USER_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});
export const resetUserQuestionAnswer = ({ authedUser, qid, answer }) => ({
  type: RESET_USER_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});
