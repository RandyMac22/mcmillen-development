import "../index.css";
import { Link } from "react-router-dom";
import React from "react";
import randyMacLogo from "../Components/img/Randy-Mac-Dev-logo.jpg";

function Nav() {
    return (
        <nav className="Navigation">
          <div className="Navigation">
            <div className="topCenter">
              <ul className="topList">
                <li className="listItem">
                    <Link to="/">Home</Link>
                </li>
                <li className="listItem">
                    <Link to="projects">Projects</Link>
                </li>
                <li className="listItem">
                    <Link to="about">About</Link>
                </li>
                <li className="listItem">
                    <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}
export default Nav;
