import React from "react";
import { Phone } from "../Ic/Ic";
import Btn from "../Btn/Btn";
import { ScrollTop } from "../ScrollTop/ScrollTop";

import NavSocial from "../NavSocial/NavSocial";
import "./Footer.sass";

const Footer = props => {
  return (
    <footer>
      <div className="FooterContainer">
        <div className="FooterLinkActions">
          <Btn
            type="link"
            to="/bonuses"
            size="min"
            title="Акции !"
            onClick={ScrollTop}
          />
        </div>
        <a href="tel:+375256363636" className="FooterLinkPhone">
          <div>
            <Phone />
          </div>
          <nobr>+375 256 363 366</nobr>
        </a>
        <NavSocial />
      </div>
    </footer>
  );
};

export default Footer;
