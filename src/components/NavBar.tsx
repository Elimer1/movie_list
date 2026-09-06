import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink
        to={"/"}
        className={(isActive) => (isActive ? "active-link" : " ")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/Favorites"}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Favorites
      </NavLink>
    </nav>
  );
};

export default NavBar;
