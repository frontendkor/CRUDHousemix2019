import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ScrollTop } from "../../ScrollTop/ScrollTop";
import Btn from "../../Btn/Btn";

import Logout from "../../../actions/Profile/Logout";

import "./LogoutBtn.sass";

const LogoutBtn = props => {
  const { Logout } = props;
  const exit = () => {
    Logout(false);
    ScrollTop();
  };
  return (
    <div className="LogoutBtnContainer">
      <Btn
        type="link"
        to="/profile"
        title="Выйти"
        size="medium"
        onClick={exit.bind(this)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    Logout: authenticated => dispatch(Logout(authenticated))
  };
};

LogoutBtn.propTypes = {
  Logout: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutBtn);
