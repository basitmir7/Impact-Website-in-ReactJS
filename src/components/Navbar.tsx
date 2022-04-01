import React from "react";
import { FC } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar: FC = () => {
  return (
    <div className="site-nav">
      <h2 className="navigation-header">
        <a>Impact</a>
      </h2>
      <ul className="nav-list">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>
            Dropdown
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginLeft: "4px" }}
            />
          </a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
      <a className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </a>
    </div>
  );
};
export default Navbar;
