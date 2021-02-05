import React from "react";
import { Link } from "react-router-dom";

function QuestionNotFound() {
  return (
    <div className="container2">
      <div className="circle-image error-404-style">404</div>

      <h2 className="title">Question Not Found</h2>

      <div className="would-rather-text would-rather-answer-page">
        <h1>would you rather?</h1>
      </div>

      <div className="options-container">
        <Link to="/">
          <div className="question-card-button option-button center-vertical-container scorll-bar-hidden ">
            <div className="center-vertical-child" style={{ zIndex: 1 }}>
              <h2 className="option-button-text">go to home</h2>
              <h1 className="option-button-text">50%</h1>
            </div>
            <div
              style={{
                width: "50%",
              }}
              className="persentage-bar-one"
            ></div>
          </div>
        </Link>
        <Link to="/add">
          <div className="question-card-button option-button center-vertical-container scorll-bar-hidden blue-option-button">
            <div className="center-vertical-child" style={{ zIndex: 1 }}>
              <h2 className="option-button-text ">create new question</h2>
              <h1 className="option-button-text ">50%</h1>
            </div>
            <div
              style={{
                width: "50%",
              }}
              className="persentage-bar-two"
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default QuestionNotFound;
