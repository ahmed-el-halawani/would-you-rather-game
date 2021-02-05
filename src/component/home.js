import React, { Component } from "react";
import { connect } from "./widgets/componentImps";
import { logOutAuthedUser } from "../actions/actionsImps";
import QuestionCard from "./widgets/questionCard";

class Home extends Component {
  state = {
    activeList: 0,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  logOut = () => {
    this.props.logOutAuthedUser();
  };

  changeActiveList = (activeList) => {
    if (this.state.activeList !== activeList) {
      this.setState({ activeList });
    }
  };

  render() {
    const { unAnswredQuestions, answeredQuestions } = this.props;
    return (
      <div>
        <div className="dashboard">
          <div className="question-type-switcher">
            <span
              onClick={() => this.changeActiveList(0)}
              className={
                this.state.activeList === 0 ? "switch active" : "switch"
              }
            >
              UNANSWERED QUESTIONS
            </span>
            <span
              onClick={() => this.changeActiveList(1)}
              className={
                this.state.activeList !== 0 ? "switch active" : "switch"
              }
            >
              ANSWERED QUESTIONS
            </span>
          </div>

          <div className="question-card-grid">
            {this.state.activeList === 0
              ? unAnswredQuestions.map((i) => (
                  <QuestionCard key={i} id={i}></QuestionCard>
                ))
              : answeredQuestions.map((i) => (
                  <QuestionCard key={i} id={i}></QuestionCard>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredQuestions = users[authedUser].answers
    ? Object.keys(users[authedUser].answers).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      )
    : [];
  const unAnswredQuestions = questions
    ? Object.keys(questions)
        .filter((i) => !answeredQuestions.includes(i))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    : [];

  return {
    authedUser,
    unAnswredQuestions,
    answeredQuestions,
  };
}

export default connect(mapStateToProps, logOutAuthedUser)(Home);
