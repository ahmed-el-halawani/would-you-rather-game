import React from "react";
import LeaderboardItem from "./widgets/leaderboardItem";
import { connect } from "./widgets/componentImps";

function Leaderboard({ usersIds }) {
  return (
    <div className="content-body">
      <div className="center">
        <div className="list">
          {usersIds.map((i, index) => (
            <LeaderboardItem key={i} userId={i} rank={index}></LeaderboardItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ users }) {
  const userScore = (user) =>
    Object.keys(user.answers).length + user.questions.length;

  const sortedUsers = Object.values(users).sort(
    (a, b) => userScore(b) - userScore(a)
  );

  return {
    usersIds: sortedUsers.map((i) => i.id),
  };
}

export default connect(mapStateToProps)(Leaderboard);
