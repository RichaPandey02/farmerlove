import React, { useState } from "react";
import Nav from '../styles/Nav.css'
import { NavLink } from "react-router-dom";
function NavBar() {
  let a = window.location.pathname;

  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav__header">
          <div className="nav__title">
            <NavLink
              to="/"
              className="nav__link--color"
               activeClassName="nav__link--active"
            >
              {/* Farmer's Friend */}
            </NavLink>
          </div>
        </div>
        <div className="nav__btn">
          <label for="nav-check">
            <span>...</span>
            <span>...</span>
            <span>...</span>
          </label>
        </div>
        

        <div className="nav__links">
          <div className="nav__link">
            <NavLink
              to="/"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Home
            </NavLink>{" "}
          </div>
          <div className="nav__link">
            <NavLink
              to="/help"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Helplines
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/mandi"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Mandi
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/Impd"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Important Address
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/schemes"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Schemes
            </NavLink>
          </div>
          <div className="nav__link">
            <NavLink
              to="/contactus"
              className="nav__link--color"
              activeClassName="nav__link--active"
            >
              Contact Us
            </NavLink>
          </div>
         
          
        </div>
      </div>
    </div>
    
  );
}

export default NavBar;