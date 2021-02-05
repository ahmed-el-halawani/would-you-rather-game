import React, { Component } from "react";
import { Link, connect } from "./widgets/componentImps";
import { setAuthedUser } from "../actions/actionsImps";

class LoginUser extends Component {
  state = {
    selectedUser: "",
  };

  supUser = () => {
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
  };

  selectionChanges = (e) => {
    this.setState({
      selectedUser: e.target.value,
    });
  };

  componentDidMount() {
    this.setState({
      selectedUser: this.props.users[0].id,
    });
  }

  render() {
    return (
      <div className="login-container">
        <div className="center-container">
          <h1 className="login-title">welcome to our game</h1>
          {this.props.users.length !== 0 && (
            <select className="selection-box" onChange={this.selectionChanges}>
              {this.props.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          )}
          <h1>
            <Link className="login-button" onClick={this.supUser}>
              supmit
            </Link>
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(LoginUser);
