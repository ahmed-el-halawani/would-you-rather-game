import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { initData } from "../actions/actionsImps";
import LoginUser from "./login";
import Home from "./home";
import Leaderboard from "./leaderboard";
import NewQuestion from "./newQuestion";
import AnsowerQuestion from "./answerQuestion";
import TobBar from "./widgets/tobBar";

import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.initData();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {this.props.initDataState !== "true" ? (
            <div
              className="center-vertical-parent"
              style={{
                background: "linear-gradient(91deg, red, blue)",
                height: "100vh",
                width: "100vw",
              }}
            >
              <h1 className="center-vertical-child" style={{ color: "white" }}>
                loading...
              </h1>
            </div>
          ) : !this.props.authedUser ? (
            <LoginUser style={{ zIndex: 999 }}></LoginUser>
          ) : (
            <Fragment>
              <TobBar></TobBar>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/leaderboard" component={Leaderboard} />
                <Route exact path="/add" component={NewQuestion} />

                <Route
                  exact
                  path="/questions/:question_id"
                  component={AnsowerQuestion}
                ></Route>
                <Route path="">
                  <h1>noPage</h1>
                </Route>
              </Switch>
            </Fragment>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser, initDataState }) => ({
  authedUser,
  initDataState,
});

export default connect(mapStateToProps, { initData })(App);
