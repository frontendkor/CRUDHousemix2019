import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileTitle from "./ProfileTitle/ProfileTitle";
import openModal from "../../actions/Modal/openModal";

import ContactFormContainer from "../../components/Forms/ContactForm/ContactFormContainer";

import "./Profile.sass";

class Profile extends Component {
  render() {
    const { wait, login, openModal } = this.props;
    return (
      <section className="Profile">
        {wait && openModal(true, "wait")}
        <ProfileTitle login={login} />
        <ContactFormContainer />
      </section>
    );
  }
}

const mapStateToProps = store => {
  return {
    wait: store.profile.wait,
    login: store.profile.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: (isOpen, massage) => dispatch(openModal(isOpen, massage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
