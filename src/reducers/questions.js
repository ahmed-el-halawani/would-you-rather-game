import {
  GET_QUESTIONS,
  SAVE_QUESTION_ANSWER,
  RESET_QUESTION_ANSWER,
} from "../actions/questions";

import { SAVE_QUESTION } from "../actions/shared";

export const questions = (questions = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...questions,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...questions,
        [action.qid]: {
          ...questions[action.qid],
          [action.answer]: {
            ...questions[action.qid][action.answer],
            votes: questions[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    case RESET_QUESTION_ANSWER:
      return {
        ...questions,
        [action.qid]: {
          ...questions[action.qid],
          [action.answer]: {
            ...questions[action.qid][action.answer],
            votes: questions[action.qid][action.answer].votes.filter(
              (i) => i !== action.authedUser
            ),
          },
        },
      };
    case SAVE_QUESTION:
      return {
        ...questions,
        [action.question.id]: action.question,
      };
    default:
      return questions;
  }
};
