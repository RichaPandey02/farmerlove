import React from "react";
import Nav from "../styles/Nav.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  

  return (
  
    <div className="nav-margin">
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav__header">
          <div className="nav__title"></div>
        </div>
        <div className="nav__btn">
          <label for="nav-check">
            <span className="nav_span">.</span>
            <span className="nav_span">.</span>
            <span className="nav_span">.</span>
          </label>
        </div>

        <div className="nav__links">
          <div className="nav__link">
            <NavLink
              to="/home"
              className="nav__link--color"
              
              activeClassName="nav__link--active"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>{" "}
          </div>
          <div className="nav__link">
            <NavLink
              to="/help"
              className="nav__link--color"
              activeClassName="nav__link--active"
              style={{ textDecoration: "none" }}
            >
              Helplines
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/mandi"
              className="nav__link--color"
              activeClassName="nav__link--active"
              style={{ textDecoration: "none" }}
            >
              Mandi
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/Impd"
              className="nav__link--color"
              activeClassName="nav__link--active"
              style={{ textDecoration: "none" }}
            >
              Important Address
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/schemes"
              className="nav__link--color"
              activeClassName="nav__link--active"
              style={{ textDecoration: "none" }}
            >
              Schemes
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/contactus"
              className="nav__link--color"
              activeClassName="nav__link--active"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default NavBar;
