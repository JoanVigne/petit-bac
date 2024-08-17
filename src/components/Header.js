import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/one">One</a>
          </li>
          <li>
            <a href="/one/fast">fast</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
