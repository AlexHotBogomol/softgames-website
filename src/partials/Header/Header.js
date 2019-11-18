import React, {Component} from "react";
import { Link, NavLink} from "react-router-dom";
import WpApiService from "../../services/WpApiService";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Header.scss';
import Logo from '../Logo/Logo';
import ArrowDownSmall from "../../assets/icons/ArrowDownSmall";

class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      menuItems: []
    };

    this.wpApiService = new WpApiService();
  }

  componentDidMount() {
    this.wpApiService.getMenuBySlug("header-menu").then(({data: menuItems}) => {
      this.setState({
        menuItems: this.transformMenuItems(menuItems)
      })
    })
  }

  transformMenuItems = (menuItems) => {
    const transformedMenuItems = [...menuItems];
    let i = 0;
    while(i < transformedMenuItems.length){
      if(transformedMenuItems[i].menu_item_parent !== "0"){
        transformedMenuItems[i-1].children.push(transformedMenuItems[i]);
        transformedMenuItems.splice(i, 1);
      }else{
        transformedMenuItems[i].children = [];
        i++;
      }
    }
    return transformedMenuItems;
  };

  render() {
    const {menuItems} = this.state;
    return (
      <header className="header">
        <div className="container">
          <Logo/>
          {menuItems.length ? (
            <nav className="header-nav">
              <TransitionGroup className="menu header-menu">
                {menuItems.map((item) => {
                  if (item.children.length) {
                    return (
                      <CSSTransition
                        appear={true}
                        key={item.ID}
                        timeout={200}
                        classNames="fade"
                      >
                        <li className="menu-item menu-dropdown">
                          <span className="menu-link">{item.title} <ArrowDownSmall/></span>
                          <ul className="submenu">
                            {item.children.map((subitem) => {
                              return (
                                <li key={subitem.ID} className="submenu-item">
                                  <Link className="submenu-link" to={`/${subitem.slug}/`}>{subitem.title}</Link>
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                      </CSSTransition>
                    )
                  } else {
                    return (
                      <CSSTransition
                        appear={true}
                        key={item.ID}
                        timeout={200}
                        classNames="fade"
                      >
                        <li className="menu-item">
                          <NavLink activeClassName="selected" className="menu-link"
                                   to={`/${item.slug}/`}>{item.title}</NavLink>
                        </li>
                      </CSSTransition>
                    )
                  }
                })}
              </TransitionGroup>
            </nav>
          ) : null}
        </div>
      </header>
    )
  }
}

export default Header;
