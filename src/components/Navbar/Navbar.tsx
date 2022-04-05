import React, { useState } from "react";
import "./Navbar.css";
import { GrClose } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [inActive, setinActive] = useState(false);

  // const OpenSidebar = () => {
  //   setinActive(true);
  //   console.log("opened");
  // };
  // const CloseSidebar = () => {
  //   setinActive(false);
  //   console.log("closed");
  // };

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
        <FontAwesomeIcon icon={faBars} onClick={() => setinActive(!inActive)} />
      </a>
      <div id="side-bar" className={inActive ? "inactive" : ""}>
        <div className="Close-icon">
          <GrClose className="icon-x" onClick={() => setinActive(!inActive)} />
        </div>
        <ul className="class-list">
          <li>home</li>
          <li>dropdown</li>
          <li>services </li>
          <li>blog</li>
          <li>about</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
