import React from "react";
import Logo from "/Users/novymac/Desktop/jsReact/new_app/src/components/assets/startLogo.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className={s.header}>
      <a href="/">
        <img src={Logo} />
      </a>
      <div className={s.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
