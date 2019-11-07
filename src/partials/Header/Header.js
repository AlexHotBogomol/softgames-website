import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import Logo from '../Logo/Logo';
import ArrowDownSmall from "../../assets/icons/ArrowDownSmall";

const Header = ({menuItems, currentUrl}) => {
  let i = 0;
  while(i < menuItems.length){
    if(menuItems[i].menu_item_parent !== "0"){
      menuItems[i-1].children.push(menuItems[i]);
      menuItems.splice(i, 1);
    }else{
      menuItems[i].children = [];
      i++;
    }
  }
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <nav className="header-nav">
          <ul className="menu header-menu">
            {menuItems.map((item) => {
              if(item.children.length){
                return (
                  <li key={item.ID} className="menu-item menu-dropdown">
                    <span className="menu-link">{item.title} <ArrowDownSmall/></span>
                    <ul className="submenu">
                    {item.children.map((subitem)=>{
                      return(
                        <li key={subitem.ID} className="submenu-item">
                          <Link className="submenu-link" to={`/${subitem.slug}/`}>{subitem.title}</Link>
                        </li>
                      )
                    })}
                    </ul>
                  </li>
                )
              }else{
                return (
                  <li key={item.ID} className="menu-item">
                    <Link className="menu-link" to={`/${item.slug}/`}>{item.title}</Link>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
