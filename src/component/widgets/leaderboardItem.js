import React from "react";
import { connect } from "./componentImps";

function LeaderboardItem({ rank, user, score, answers, questions }) {
  return (
    <div className="item">
      <div className="pos">{rank + 1}</div>
      <div
        className="pic"
        style={{
          backgroundImage: `url(${user.avatarURL})`,
        }}
      ></div>
      <div className="name">
        <h2 className="name-text">{user.name}</h2>

        <div className="question-answers-count">
          <div>Answers :</div>
          <div>{answers}</div>
          <div>Questions :</div>
          <div>{questions}</div>
        </div>
      </div>
      <div className="score">{score}</div>
    </div>
  );
}

function mapStateToProps({ users }, { userId, rank }) {
  const user = users[userId];
  const score = (user) =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    rank,
    user,
    score: score(user),
    answers: Object.keys(user.answers).length,
    questions: user.questions.length,
  };
}

export default connect(mapStateToProps)(LeaderboardItem);
