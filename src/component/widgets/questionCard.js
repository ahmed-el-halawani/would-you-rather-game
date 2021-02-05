import React from "react";
import { Link } from "react-router-dom";
import { connect } from "./componentImps";

function QuestionCard({ question, author, isAnswered, authedAnswer, id }) {
  return (
    <div className="question-card">
      <h1 className="question-card-user-name">{author.name.trim()}</h1>

      <div
        className="question-card-image"
        style={{ backgroundImage: `url(${author.avatarURL})` }}
      />

      <div className="would-rather-text">
        <h2>would you rather?</h2>
        <h4
          className="would-rather-q-a"
          style={isAnswered ? { color: "#9c27b0" } : {}}
        >
          {authedAnswer === "optionOne"
            ? question.optionOne.text.trim()
            : question.optionTwo.text.trim()}
        </h4>
      </div>
      <Link to={`/questions/${id}`}>
        <button
          className={`question-card-button rmv-btn-style ${
            isAnswered && "answered"
          }`}
        >
          <h1 className="question-card-button-title">view question</h1>
        </button>
      </Link>
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  const authed = users[authedUser];
  const isAnswered = Object.keys(authed.answers).includes(question.id);
  const authedAnswer = isAnswered ? authed.answers[question.id] : "optionOne";

  return {
    question,
    author,
    isAnswered,
    authedAnswer,
    id,
  };
}

export default connect(mapStateToProps)(QuestionCard);
