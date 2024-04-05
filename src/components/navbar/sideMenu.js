// SideMenu.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./sideMenu.css";

function SideMenu({ isOpen, onClose }) {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="menu-content">
        {/* Add your menu content here */}
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
