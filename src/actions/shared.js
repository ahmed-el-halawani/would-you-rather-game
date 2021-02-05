import * as usersActions from "./users";
import * as questionsActions from "./questions";
import * as api from "../utils/Data";
import * as loadingBar from "react-redux-loading";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const INIT_DATA = "INIT_DATA";
export const INIT_DATA_STATE = "INIT_DATA_STATE";


export const initDataState = (state) => ({
  type: INIT_DATA_STATE,
  state,
});

export const saveQuestion = (question) => ({
  type: SAVE_QUESTION,
  question,
});

export const initData = () => {
  return (dispatch) => {
    dispatch(loadingBar.showLoading());
    return Promise.all([api._getUsers(), api._getQuestions()])
      .then(([users, questions]) => {
        console.log("questions", questions);
        dispatch(usersActions.getUsers(users));
        dispatch(questionsActions.getQuestions(questions));
        dispatch(loadingBar.hideLoading());
        dispatch(initDataState("true"));
      })
      .catch((e) => {
        alert(e);
        dispatch(loadingBar.hideLoading());
      });
  };
};

export const handleSaveQuestionAnswer = (info) => {
  return (dispatch) => {
    dispatch(questionsActions.saveQuestionAnswer(info));
    dispatch(usersActions.saveUserQuestionAnswer(info));
    api._saveQuestionAnswer(info).catch((e) => {
      dispatch(usersActions.resetUserQuestionAnswer(info));
      dispatch(questionsActions.resetQuestionAnswer(info));
      alert("sorry somthing wrong happen :(");
    });
  };
};

export const handleSaveQuestion = ({
  optionOneText,
  optionTwoText,
  author,
}) => {
  return (dispatch) => {
    dispatch(loadingBar.showLoading());
    return api
      ._saveQuestion({
        optionOneText,
        optionTwoText,
        author,
      })
      .then((question) => {
        dispatch(saveQuestion(question));
        dispatch(loadingBar.hideLoading());
      });
  };
};
