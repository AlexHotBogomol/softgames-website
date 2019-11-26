import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../Logo/Logo";
import ArrowDownSmall from "../../assets/icons/ArrowDownSmall";

const Header = props => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerClasses = [
    'header-burger',
    isMenuOpen ? 'open' : null
  ];
  const menuClasses = [
    'header-nav',
    isMenuOpen ? 'open' : null
  ];
  const overlayClasses = [
    'overlay',
    isMenuOpen ? 'open' : null
  ];
  const onBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onOverlayClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="container">
        <Logo className="header-logo"/>
        <div
          className={burgerClasses.join(' ')}
          onClick={onBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={menuClasses.join(' ')}>
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
              Partner up <ArrowDownSmall/>
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
        <div
          className={overlayClasses.join(' ')}
          onClick={onOverlayClick}
        />
      </div>
    </header>
  );
}

export default Header;
