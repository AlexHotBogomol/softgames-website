import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../Logo/Logo";
import ArrowDownSmall from "../../assets/icons/ArrowDownSmall";

const Header = (props) => (
  <header className="header">
    <div className="container">
      <Logo className="header-logo"/>
      <nav className="header-nav">
        <ul className="menu header-menu">
          <li className="menu-item">
            <NavLink
              activeClassName="selected"
              className="menu-link"
              to={`/games/`}
            >
              Games
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="selected"
              className="menu-link"
              to={`/company/`}
            >
              Company
            </NavLink>
          </li>
          <li className="menu-item menu-dropdown">
            <span className="menu-link">
              Partner up <ArrowDownSmall />
            </span>
            <ul className="submenu">
              <li className="submenu-item">
                <Link className="submenu-link" to={`/advertisers/`}>
                  Advertisers
                </Link>
              </li>
              <li className="submenu-item">
                <Link className="submenu-link" to={`/publishers/`}>
                  Publishers
                </Link>
              </li>
              <li className="submenu-item">
                <Link className="submenu-link" to={`/developers/`}>
                  Developers
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="selected"
              className="menu-link"
              to={`/career/`}
            >
              Career
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              activeClassName="selected"
              className="menu-link"
              to={`/news/`}
            >
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
