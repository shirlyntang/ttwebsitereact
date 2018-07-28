import React from "react";
import { NavLink } from "react-router-dom";

import "../css/navbar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar default-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <NavLink to="/" class="navbar-brand">
                <strong>Theta Tau | UCSB Colony</strong>
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
                      <NavLink to="/brotherhood">Brotherhood</NavLink>
                    </li>
                    <li>
                      <NavLink to="/professional">Professional</NavLink>
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
        </nav>
      </div>
    );
  }
}
