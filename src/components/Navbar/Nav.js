import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

function Nav(props) {
  let friends = props.navState.map((el) => (
    <div key={el.id}>
      {el.img} {el.name}
    </div>
  ));
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/messages"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
        <div className={s.item}>
          <NavLink
            to="/users"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Users
          </NavLink>
        </div>
      </div>
      <div className={s.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.friendsIcon}>
        <h2>Friends</h2>
        <div className={s.friendsIcon}>{friends}</div>
      </div>
    </nav>
  );
}

export default Nav;
