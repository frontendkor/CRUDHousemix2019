import React from "react";
import { Link } from "react-router-dom";

import "./ProfileTitle.sass";

const ProfileTitle = props => {
  const { login } = props;
  return (
    <>
      <div className="ProfileTitleContainer">
        <h5>
          Привет <span>{login}</span>
        </h5>
        <Link to="/settings" className="ProfileSettingsBtn">
          Изменить пароль
        </Link>
      </div>
    </>
  );
};

export default ProfileTitle;
