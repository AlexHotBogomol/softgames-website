import {useState, useEffect} from "react";
import Link from 'next/link';
import NavLink from "../NavLink";
import "./Header.scss";
import Logo from "../Logo/Logo";
import ArrowDownSmall from "../../assets/icons/ArrowDownSmall";
import '../../assets/sass/index.scss';

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
          <span />
          <span />
          <span />
        </div>
        <nav className={menuClasses.join(' ')}>
          <ul className="menu header-menu">
            <li className="menu-item">
              <NavLink
                activeClassName="selected"
                href="/free-online-games"
              >
                <a className="menu-link">
                  Games
                </a>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="selected"
                href="/company"
              >
                <a className="menu-link">
                  Company
                </a>
              </NavLink>
            </li>
            <li className="menu-item menu-dropdown d-none d-lg-flex">
              <span className="menu-link">
                Partner up <ArrowDownSmall/>
              </span>
              <ul className="submenu">
                <li className="submenu-item">
                  <Link href="/advertisers">
                    <a className="submenu-link">
                      Advertisers
                    </a>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link href="/license-html5-games">
                    <a className="submenu-link">
                      Publishers
                    </a>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link href="/distribute-html5-games">
                    <a className="submenu-link">
                      Developers
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            {/*For adaptive menu*/}
            <li className="menu-item d-lg-none">
              <Link href="/advertisers">
                <a className="menu-link">
                  Advertisers
                </a>
              </Link>
            </li>
            <li className="menu-item d-lg-none">
              <Link href="/license-html5-games">
                <a className="menu-link">
                  Publishers
                </a>
              </Link>
            </li>
            <li className="menu-item d-lg-none">
              <Link href="/distribute-html5-games">
                <a className="menu-link">
                  Developers
                </a>
              </Link>
            </li>
            {/*For adaptive menu*/}
            <li className="menu-item">
              <NavLink
                activeClassName="selected"
                href="/career"
              >
                <a className="menu-link">
                  Career
                </a>
              </NavLink>
            </li>
            <li className="menu-item">
              <a href="https://softgames.ein-des-ein.com" className="menu-link">
                News
              </a>
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
};

export default Header;
