import React from "react";
import { connect } from "./widgets/componentImps";
import { handleSaveQuestionAnswer } from "../actions/actionsImps";
import QuestionNotFound from "./questionNotFound";

function AnsowerQuestion({
  question,
  author,
  isAnswered,
  isOptionOne,
  isOptionTwo,
  optionOnePersentage,
  optionTwoPersentage,
  qid,
  authedUser,
  handleSaveQuestionAnswer,
  questionNotFound,
  optionOneVotes,
  sumOfAnswers,
  optionTwoVotes,
}) {
  const saveOption = (selectedOption) => {
    if (!isAnswered) {
      handleSaveQuestionAnswer({ answer: selectedOption, authedUser, qid });
    }
  };

  if (questionNotFound) {
    return <QuestionNotFound></QuestionNotFound>;
  }

  const { name } = author;

  const { optionOne, optionTwo } = question;

  return (
    <div className="container2">
      <div className="">
        <div
          className="circle-image"
          style={{ backgroundImage: `url(${author.avatarURL})` }}
        ></div>
        <h3 className="title">{name}</h3>
      </div>

      <div className="would-rather-text would-rather-answer-page">
        <h1>would you rather?</h1>
      </div>

      <div className="options-container">
        <div
          onClick={() => saveOption("optionOne")}
          className={`question-card-button option-button center-vertical-container scorll-bar-hidden ${
            isOptionOne && "your-answer"
          }`}
        >
          <div className="center-vertical-child" style={{ zIndex: 1 }}>
            <h2 className="option-button-text">{optionOne.text}</h2>
            {isAnswered && (
              <div>
                <h1 className="option-button-text">
                  {optionOnePersentage.toFixed(2)}%
                </h1>
                <h1 style={{ color: "white" }}>
                  {optionOneVotes} out of {sumOfAnswers} votes
                </h1>
              </div>
            )}
          </div>
          <div
            style={{
              width: isAnswered && optionOnePersentage + "%",
            }}
            className="persentage-bar-one"
          ></div>
        </div>

        <div
          onClick={() => saveOption("optionTwo")}
          className={`question-card-button margin-left-5x center-vertical-container scorll-bar-hidden option-button blue-option-button ${
            isOptionTwo ? "your-answer" : ""
          }`}
        >
          <div className="center-vertical-child" style={{ zIndex: 1 }}>
            <h2 className="option-button-text ">{optionTwo.text}</h2>
            {isAnswered && (
              <div>
                <h1 className="option-button-text ">
                  {optionTwoPersentage.toFixed(2)}%
                </h1>
                <h1 style={{ color: "white" }}>
                  {optionTwoVotes} out of {sumOfAnswers} votes
                </h1>
              </div>
            )}
          </div>
          <div
            style={{
              width: isAnswered && optionTwoPersentage + "%",
            }}
            className="persentage-bar-two"
          ></div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { question_id } = props.match.params;

  if (!Object.keys(questions).includes(question_id)) {
    return {
      questionNotFound: true,
    };
  }

  const question = questions[question_id];

  const author = users[question.author];
  const isAnswered = Object.keys(users[authedUser].answers).includes(
    question.id
  );
  const isOptionOne = question.optionOne.votes.includes(authedUser);
  const isOptionTwo = question.optionTwo.votes.includes(authedUser);
  const sumOfAnswers =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOnePersentage =
    (question.optionOne.votes.length / sumOfAnswers) * 100;
  const optionTwoPersentage =
    (question.optionTwo.votes.length / sumOfAnswers) * 100;

  return {
    question,
    author,
    isAnswered,
    isOptionOne,
    isOptionTwo,
    optionOnePersentage,
    optionTwoPersentage,
    qid: question_id,
    authedUser,
    optionOneVotes: question.optionOne.votes.length,
    sumOfAnswers,
    optionTwoVotes: question.optionTwo.votes.length,
  };
}

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(
  AnsowerQuestion
);
