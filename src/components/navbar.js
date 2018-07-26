import React from "react";
import "../css/navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar default-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <a href="#" class="navbar-brand">
                Theta Tau | UCSB Colony
              </a>
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
                  <a href="./index.html">Home</a>
                </li>
                <li className="dropdown">
                  <a>About</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="./history.html">History</a>
                    </li>
                    <li>
                      <a href="./brotherhood.html">Brotherhood</a>
                    </li>
                    <li>
                      <a href="./prodev.html">Professional</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a>Members</a>
                </li>
                <li>
                  <a href="./rush.html">Rush</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
