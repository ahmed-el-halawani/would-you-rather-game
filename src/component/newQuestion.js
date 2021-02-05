import React, { Component } from "react";
import { connect, Link } from "./widgets/componentImps";
import { handleSaveQuestion } from "../actions/actionsImps";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  saveQuestion = () => {
    const { authedUser } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(
      handleSaveQuestion({
        author: authedUser,
        optionOneText,
        optionTwoText,
      })
    );
  };

  activePublishButton = () => {
    return this.state.optionOneText !== "" && this.state.optionTwoText !== "";
  };

  render() {
    return (
      <div className="container2">
        <div className="would-rather-text would-rather-answer-page">
          <h1>would you rather?</h1>
        </div>

        <div className="options-container">
          <div className="question-card-button option-button center-vertical-container  scorll-bar-hidden type-question">
            <div className="center-vertical-child option-button-container">
              <p>
                <span
                  className="textarea option-button-text-input"
                  role="textbox"
                  contentEditable={true}
                  onInput={(e) => {
                    this.setState({ optionOneText: e.target.innerText });
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const text = e.clipboardData.getData("text");
                    e.target.innerText = text;
                    this.setState({ optionOneText: text });
                  }}
                ></span>
              </p>
            </div>
          </div>

          <div className="question-card-button scorll-bar-hidden center-vertical-container margin-left-5x option-button blue-option-button type-question">
            <div className="center-vertical-child option-button-container">
              <p>
                <span
                  className="textarea-option-two option-button-text-input"
                  role="textbox"
                  onKeyUp={(e) => {
                    this.setState({ optionTwoText: e.target.innerText });
                  }}
                  contentEditable="true"
                  onPaste={(e) => {
                    e.preventDefault();
                    const text = e.clipboardData.getData("text");
                    e.target.innerText = text;
                    this.setState({ optionTwoText: text });
                  }}
                ></span>
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/"
          onClick={this.saveQuestion}
          className={
            this.activePublishButton()
              ? "publich-question-btn"
              : "publich-question-btn-desable"
          }
        >
          <h1>publish question</h1>
        </Link>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser }) {
  return {
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
