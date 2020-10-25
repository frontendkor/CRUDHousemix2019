import React from "react";
import { NavLink } from "react-router-dom";
import { Cart, Profile, Search } from "../Ic/Ic";
import { ScrollTop } from "../ScrollTop/ScrollTop";
import { links } from "./links";

const RenderLinks = props => {
  const { sum } = props;

  return links.map(({ name, ic, to, data }) => {
    return (
      <NavLink to={to} className={`link${ic}`} key={ic} onClick={ScrollTop}>
        {name && <span>{name}</span>}
        <i className="ic">
          {ic === "Search" && <Search classis={ic} />}
          {ic === "Profile" && <Profile classis={ic} />}
          {ic === "Cart" && <Cart classis={ic} />}
        </i>
        {data && <div className="dataCart">{`${sum}p`}</div>}
      </NavLink>
    );
  });
};

export default RenderLinks;
