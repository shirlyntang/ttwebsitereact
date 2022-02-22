import React from "react";
import { NavLink } from "react-router-dom";

import "../css/navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div
          className="navbar default-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <NavLink to="/" className="navbar-brand">
                <strong>
                  Theta Tau <span className="red-accents">|</span> Sigma Epsilon Chapter
                </strong>
              </NavLink>
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="dropdown">
                  <a>About</a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/history">History</NavLink>
                    </li>
                    <li>
                      <NavLink to="/brotherhood">Family</NavLink>
                    </li>
                    <li>
                      <NavLink to="/professional">Professional</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service">Service</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a>Members</a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/actives">Actives</NavLink>
                    </li>
                    <li>
                      <NavLink to="/alumni">Alumni</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/rush">Rush</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
