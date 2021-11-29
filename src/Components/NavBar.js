import React from "react";
import "../index.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <ul>
        <li className="nav-link">Home</li>
        <li className="nav-link">Programming Blogs</li>
        <li className="nav-link">Fitness Blogs</li>
        <li className="nav-link">Everyday Blog</li>
      </ul>
    </nav>
  );
}

export default NavBar;
