import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

function NavBar(props) {
  return (
    <nav className="nav-container">
      <ul>
        <Link className="nav-link" to={props.home}>
          Home
        </Link>
        <Link className="nav-link" to={props.programmingblog}>
          Programming Blogs
        </Link>

        {/* <li className="nav-link">Home</li>
        <li className="nav-link">Programming Blogs</li> */}
        {/* <li className="nav-link">Fitness Blogs</li>
        <li className="nav-link">Everyday Blog</li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
