// import React, { useState } from "react";
// import SideMenu from "./sideMenu";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./navbar.css";

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="container">
//           <a href="/" className="navbar-logo">
//             SK
//           </a>
//           <div className="menu-icon" onClick={toggleMenu}>
//             {showMenu ? (
//               <i className="fas fa-times"></i>
//             ) : (
//               <i className="fas fa-bars"></i>
//             )}
//           </div>
//           <ul className={`navbar-links ${showMenu ? "active" : ""}`}>
//             <li>
//               <a href="#about" onClick={toggleMenu}>
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#projects" onClick={toggleMenu}>
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="#contact" onClick={toggleMenu}>
//                 Contact
//               </a>
//             </li>
//             {/* Add more navigation links as needed */}
//           </ul>
//         </div>
//       </nav>
//       <SideMenu isOpen={showMenu} onClose={toggleMenu} />
//     </>
//   );
// }

// export default Navbar;

// Navbar.js

import React, { useState } from "react";
import SideMenu from "./sideMenu";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="/" className="navbar-logo">
            SK
          </a>
          <div className="menu-icon" onClick={toggleMenu}>
            {showMenu ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
          <ul className={`navbar-links ${showMenu ? "active" : ""}`}>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>
      <SideMenu isOpen={showMenu} onClose={toggleMenu} />
    </>
  );
}

export default Navbar;
