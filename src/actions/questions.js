export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const RESET_QUESTION_ANSWER = "RESET_QUESTION_ANSWER";

export const getQuestions = (questions) => ({
  type: GET_QUESTIONS,
  questions,
});

export const saveQuestionAnswer = ({ authedUser, qid, answer }) => ({
  type: SAVE_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});

export const resetQuestionAnswer = ({ authedUser, qid, answer }) => ({
  type: RESET_QUESTION_ANSWER,
  authedUser,
  qid,
  answer,
});
