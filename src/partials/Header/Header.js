import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Logo from '../Logo/Logo';
import WithConsumer from "../../context/WithConsumer";

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
              <Link className="menu-item" to="/about">About</Link>
            </li>
            <li>
              <Link className="menu-item" to="/games">Games</Link>
            </li>
            <li>
              <Link className="menu-item" to="/news">News</Link>
            </li>
            <li>
              <Link className="menu-item" to="/post">Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default WithConsumer(Header);
