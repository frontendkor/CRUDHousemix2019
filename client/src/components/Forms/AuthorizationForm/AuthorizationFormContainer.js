import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AuthorizationForm from "./AuthorizationForm";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import Login from "../../../actions/Profile/Login";

class AuthorizationFormContainer extends Component {
  submit(values) {
    const { Login } = this.props;
    // console.log(JSON.stringify(values));
    let login = values.login;
    let password = values.password;
    Login(login, password);
    ScrollTop();
    // this.props.history.replace("/profile");
  }
  render() {
    const { isAuth, wait } = this.props;
    return (
      <>
        {isAuth ? (
          <Redirect to="/profile" />
        ) : (
          <AuthorizationForm wait={wait} onSubmit={this.submit.bind(this)} />
        )}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    isAuth: store.profile.isAuth,
    wait: store.profile.wait,
    form: store.form.AuthorizationForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: (login, password) => dispatch(Login(login, password))
  };
};

AuthorizationFormContainer.propTypes = {
  Login: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationFormContainer);
