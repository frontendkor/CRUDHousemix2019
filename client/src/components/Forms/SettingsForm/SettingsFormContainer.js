import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SettingsForm from "./SettingsForm";

import changePassword from "../../../actions/Profile/changePassword";

class SettingsFormContainer extends Component {
  submit(values) {
    const { changePassword, userId } = this.props;
    const { passwordActual, passwordNew } = values;
    changePassword(passwordActual, passwordNew, userId);
    // console.log(values);
  }
  render() {
    const { isAuth } = this.props;
    return (
      <>
        {isAuth ? (
          <SettingsForm onSubmit={this.submit.bind(this)} />
        ) : (
          <Redirect to="/profile" />
        )}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    isAuth: store.profile.isAuth,
    userId: store.profile.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePassword: (passwordActual, passwordNew) => {
      dispatch(changePassword(passwordActual, passwordNew));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsFormContainer);
