import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { RenderLinks } from "./RenderLinks";
import { Navbar } from "react-materialize";
import { ScrollTop } from "../ScrollTop/ScrollTop";
import "./Nav.sass";

class Nav extends Component {
  render() {
    return (
      <Navbar className="Nav" alignLinks="left" fixed={true}>
        <NavLink to="/" exact className="link" onClick={ScrollTop}>
          <Logo />
        </NavLink>
        {RenderLinks()}
      </Navbar>
    );
  }
}

export default Nav;
