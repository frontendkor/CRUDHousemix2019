import React from "react";
import { Loading } from "../Ic/Ic";
import "./PreloaderMini.sass";

const PreloaderMini = props => {
  const { w, h } = props;
  const style = { width: w, height: h };
  return (
    <div className="PreloaderMini">
      <div style={style}>
        <Loading />
      </div>
    </div>
  );
};

export default PreloaderMini;
