import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "./links";
import { Delivery, Pizza, Sushi, Burger, Drinks, Actions } from "../Ic/Ic";
import { ScrollTop } from "../ScrollTop/ScrollTop";

const RenderLinks = props => {
  return links.map(({ name, ic, to }) => {
    return (
      <NavLink to={to} className={`link${ic}`} key={ic} onClick={ScrollTop}>
        {name && <span>{name}</span>}
        <i className="ic">
          {ic === "Pizza" && <Pizza classis={ic} />}
          {ic === "Sushi" && <Sushi classis={ic} />}
          {ic === "Burger" && <Burger classis={ic} />}
          {ic === "Drinks" && <Drinks classis={ic} />}
          {ic === "Delivery" && <Delivery classis={ic} />}
          {ic === "Actions" && <Actions classis={ic} />}
        </i>
      </NavLink>
    );
  });
};

export { RenderLinks };
