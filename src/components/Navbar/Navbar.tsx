import { useState } from "react";
import "./Navbar.css";
import { GrClose } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [inActive, setinActive] = useState(false);
  const [menuOne, setmenuOne] = useState(false);
  const [menuTwo, setmenuTwo] = useState(false);

  return (
    <div className="site-nav">
      <h2 className="navigation-header">
        <a href="#">Impact</a>
      </h2>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li className="hover-element">
          <a href="#">
            Dropdown
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ marginLeft: "4px", fontSize: "10px" }}
            />
          </a>
        </li>
        {/* creating dropdown  */}
        <ul id="menu-drop-hover">
          <li>Menu one</li>
          <li className="sub-hover-li">
            Menu two
            <RiArrowDropDownLine
              style={{
                float: "right",
                fontSize: "23px",
                transform: "rotate(-90deg)",
              }}
            />
          </li>
          <ul id="sub-menu-drop">
            <li>sub Menu one</li>
            <li>sub Menu two</li>
            <li>sub Menu three</li>
          </ul>
          <li>Menu three</li>
        </ul>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>

      <a className="menu-icon" href="#">
        <FontAwesomeIcon icon={faBars} onClick={() => setinActive(!inActive)} />
      </a>
      <div id="side-bar" className={inActive ? "inactive" : ""}>
        <div className="Close-icon">
          <GrClose className="icon-x" onClick={() => setinActive(!inActive)} />
        </div>
        <ul className="class-list">
          <li>home</li>
          <li onClick={() => setmenuOne(!menuOne)}>
            dropdown{" "}
            <RiArrowDropDownLine
              id="icon-down"
              className={menuOne ? "icon-active" : ""}
            />
          </li>
          <ul id="drop-menu-1" className={menuOne ? "Active-one" : ""}>
            <li>Menu 1</li>
            <li onClick={() => setmenuTwo(!menuTwo)}>
              Menu 2{" "}
              <RiArrowDropDownLine
                id="icon-down"
                className={menuTwo ? "icon-active" : ""}
              />
            </li>
            <ul id="sub-menu" className={menuTwo ? "Active-two" : ""}>
              <li>sub menu 1</li>
              <li>sub menu 2</li>
              <li>sub menu 3</li>
            </ul>
            <li>Menu 3</li>
          </ul>
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
