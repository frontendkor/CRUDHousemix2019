import React from "react";
import PreloaderMini from "../../PreloaderMini/PreloaderMini";
import "./PreloaderForm.sass";

export let PreloaderForm = props => {
  return (
    <div className="PreloaderForm">
      <PreloaderMini w="40px" h="40px" />
    </div>
  );
};
