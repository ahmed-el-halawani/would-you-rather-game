import {
  GET_USERS,
  SAVE_USER_QUESTION_ANSWER,
  RESET_USER_QUESTION_ANSWER,
} from "../actions/users";

import { SAVE_QUESTION } from "../actions/shared";

export const users = (users = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...users,
        ...action.users,
      };
    case SAVE_USER_QUESTION_ANSWER:
      return {
        ...users,
        [action.authedUser]: {
          ...users[action.authedUser],
          answers: {
            ...users[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case RESET_USER_QUESTION_ANSWER:
      delete users[action.authedUser].answers[action.qid];
      return users;
    case SAVE_QUESTION:
      console.log(action);
      return {
        ...users,
        [action.question.author]: {
          ...users[action.question.author],
          questions: [
            ...users[action.question.author].questions,
            action.question.id,
          ],
        },
      };
    default:
      return users;
  }
};
