import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RegistrationForm from "./RegistrationForm";
import PreloaderMini from "../../PreloaderMini/PreloaderMini";

import Registration from "../../../actions/Profile/Registration";

const RegistrationFormContainer = props => {
  const submit = userData => {
    const { Registration } = props;
    Registration(props.history, userData);
  };
  const { wait } = props.profile;
  return (
    <>
      {wait ? (
        <div className="preloader">
          <PreloaderMini w="60px" h="60px" />
        </div>
      ) : (
        <RegistrationForm onSubmit={submit.bind(this)} />
      )}
    </>
  );
};

const mapStateToProps = store => {
  return {
    profile: store.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Registration: (authenticated, login, password, phone) =>
      dispatch(Registration(authenticated, login, password, phone))
  };
};

RegistrationFormContainer.propTypes = {
  Registration: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationFormContainer);
