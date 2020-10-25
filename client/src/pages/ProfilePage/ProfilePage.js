import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "../../components/Profile/Profile";
import { Redirect } from "react-router-dom";
import redirectTo from "../../actions/Profile/redirectTo";

class ProfilePage extends Component {
  componentWillUnmount() {
    const { redirectTo } = this.props;
    redirectTo(false);
  }
  render() {
    const { isAuth, redirect } = this.props;
    return (
      <>
        {isAuth ? (
          <>{redirect ? <Redirect to="/cart" /> : <Profile />}</>
        ) : (
          <Redirect to="/authorization" />
        )}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    isAuth: store.profile.isAuth,
    redirect: store.profile.redirect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    redirectTo: redirect => dispatch(redirectTo(redirect))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
