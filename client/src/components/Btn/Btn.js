import React from "react";
import { Link } from "react-router-dom";

import mod from "./Btn.module.sass";

const Btn = props => {
  const { type, title, submit, to, target, size, onClick } = props;
  const sizeBtn = () => {
    switch (size) {
      case "min":
        return mod.min;
      case "medium":
        return mod.medium;
      case "big":
        return mod.big;
      default:
        return mod.medium;
    }
  };
  const Btn = () => {
    if (type === "btn") {
      return (
        <button
          type={submit ? `submit` : `button`}
          onClick={onClick && onClick}
          className={sizeBtn()}
        >
          {title}
        </button>
      );
    }
  };
  const BtnLink = () => {
    return target ? (
      <a
        href={to}
        target={target && "_blank"}
        rel={target && "noreferrer noopener"}
        className={sizeBtn()}
        onClick={onClick && onClick}
      >
        {title}
      </a>
    ) : (
      <Link to={to} className={sizeBtn()} onClick={onClick && onClick}>
        {title}
      </Link>
    );
  };
  return (
    <>
      {type === `btn` && Btn()}
      {type === `link` && BtnLink()}
    </>
  );
};
export default Btn;
