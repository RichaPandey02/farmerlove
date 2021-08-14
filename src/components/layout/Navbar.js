import React, { useState } from "react";
import Nav from '../styles/Nav.css'
import { NavLink } from "react-router-dom";
// function myFunction()
// {
//   var item=document.getElementById("menu-list");
//   if(item){
//     item.className=(item.className==='menu-list')?'menu-list unhidden': 'menu-list';
//   }
// }
function NavBar() {
   let a = window.location.pathname;

  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav__header">
          <div className="nav__title">
            {/* <NavLink
              to="/home"
              className="nav__link--color"
               activeClassName="nav__link--active"
            >
              Farmer's Friend
            </NavLink> */}
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
              to="/home"
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


    // <body>
    //   <header>
    //     <nav class="navigation">
    //       <div class="logo">
    //         <h1>Farmer's Friend</h1>
    //       </div>
    //       <ul class="menu-list" id="menu-list">
    //         <li><a href="#">Home</a></li>
    //         <li><a href="#">About</a></li>
    //         <li><a href="#">Services</a></li>
    //         <li><a href="#">Project</a></li>
    //         <li><a href="#">Contact</a></li>
    //       </ul>
    //       <div class="humbarger" onClick="myFunction()">
    //         <div class="bar"></div>
    //         <div class="bar2 bar"></div>
    //         <div class="bar"></div>
    //       </div>
    //     </nav>
    //   </header>
    // </body>
  );
}

export default NavBar;