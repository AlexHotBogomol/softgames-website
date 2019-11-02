import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import Logo from '../Logo/Logo';

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <nav className="header-nav">
          <ul className="menu">
            <li className={props.currentUrl === '/' ? "selected" : null}>
              <Link className="menu-item" to="/">Home</Link>
            </li>
            <li>
              <Link className="menu-item" to="/company">Company</Link>
            </li>
            <li>
              <Link className="menu-item" to="/partner-up">Partner up</Link>
            </li>
            <li>
              <Link className="menu-item" to="/career">Career</Link>
            </li>
            <li>
              <Link className="menu-item" to="/news">News</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
