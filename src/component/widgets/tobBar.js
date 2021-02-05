import React from "react";
import { Icons, connect, NavLink } from "./componentImps";
import { logOutAuthedUser } from "../../actions/actionsImps";
import LoadingBar from "react-redux-loading";
import { Link } from "react-router-dom";

function TobBar({ name, avatarURL, logOutAuthedUser }) {
  function logOut() {
    logOutAuthedUser();
  }

  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="top-bar ">
      <LoadingBar></LoadingBar>
      <div className="top-bar-container">
        <div className="authed-user-icon">
          <div
            className="top-bar-image"
            style={{ backgroundImage: `url(${avatarURL})` }}
          ></div>
          <span className="title">{name}</span>
        </div>

        <ul className="nav-list">
          <NavLink
            onClick={toTop}
            to="/"
            exact
            activeClassName="activeTab"
            className="tab space-horizontal space-vertical center-text"
          >
            <span>
              <div>
                <Icons.TiHomeOutline className="icon"></Icons.TiHomeOutline>
              </div>
              <div className="title">home</div>
            </span>
          </NavLink>
          <NavLink
            to="/leaderboard"
            onClick={toTop}
            exact
            activeClassName="activeTab"
            className="tab space-horizontal space-vertical center-text"
          >
            <span>
              <div>
                <Icons.BiGrid className="icon"></Icons.BiGrid>
              </div>
              <div className="title">leaderboard</div>
            </span>
          </NavLink>
          <NavLink
            to="/add"
            onClick={toTop}
            exact
            activeClassName="activeTab"
            className="tab space-horizontal space-vertical center-text"
          >
            <span>
              <div>
                <Icons.FaNewspaper className="icon"></Icons.FaNewspaper>
              </div>
              <div className="title">new question</div>
            </span>
          </NavLink>
        </ul>

        <div className="log-out-button">
          <Link to="/">
            <button
              onClick={logOut}
              className="tab space-horizontal space-vertical center-text"
            >
              <div>
                <Icons.FaSignOutAlt className="icon"></Icons.FaSignOutAlt>
              </div>
              <div className="title">LogOut</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  return users[authedUser];
}

export default connect(mapStateToProps, { logOutAuthedUser })(TobBar);
