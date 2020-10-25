import React from "react";
import mod from "./Logo.module.sass";

const Logo = props => {
  const { br, classis } = props;
  return (
    <div className={classis}>
      <p className={mod.LogoContainer}>
        HOUSE{br && <br />}
        <span>MIX</span>
      </p>
    </div>
  );
};

export default Logo;
