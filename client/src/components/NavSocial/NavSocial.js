import React from "react";
import { Instagram, Vk } from "../Ic/Ic";

import "./NavSocial.sass";

const NavSocial = props => {
  return (
    <div className="NavSocial">
      <a
        href="https://vk.com"
        rel="noopener noreferrer"
        target="_blank"
        className="NavSocialLink"
      >
        <div className="NavSocialVk">
          <Vk />
        </div>
      </a>
      <a
        href="https://www.instagram.com"
        rel="noopener noreferrer"
        target="_blank"
        className="NavSocialLink"
      >
        <div className="NavSocialInstagram">
          <Instagram />
        </div>
      </a>
    </div>
  );
};

export default NavSocial;
