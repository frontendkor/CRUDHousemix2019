import React from "react";
import PropTypes from "prop-types";
import ImageLoader from "react-load-image";
import PreloaderMini from "../../../PreloaderMini/PreloaderMini";
import mod from "./Img.module.sass";

export const Img = props => {
  return (
    <ImageLoader className={mod.ImageLoader} src={props.src}>
      <img alt="img" />
      <div className={mod.err}>Ошибка</div>
      <PreloaderMini w="20px" h="20px" />
    </ImageLoader>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired
};
