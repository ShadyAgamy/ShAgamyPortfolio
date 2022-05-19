import React from 'react';
import { NavLink } from 'react-router-dom';

import './menu.scss';

import mainLogo from '../../assets/avatar.svg';

export default function Menu({ menuOpen, toggleMenu }) {
  return (
    <div className={`menu_cont bg_black ${menuOpen ? 'open' : 'close'}`}>
      <div className="menu_toggle">
        <span onClick={toggleMenu}>
          <i className={`fas  ${menuOpen ? 'fa-times' : 'fa-bars'} `}></i>
        </span>
      </div>
      <div className="avatar_cont">
        <img src={mainLogo} alt="" />
      </div>
      <div className="menu_cont_links">
        <ul>
          <li>
            <NavLink exact to="/" className="co_white" activeClassName="active" onClick={toggleMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="co_white" activeClassName="active" onClick={toggleMenu}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/resume" className="co_white" activeClassName="active" onClick={toggleMenu}>
              RESUME
            </NavLink>
          </li>
          <li>
            <NavLink exact to="portfolio" className="co_white" activeClassName="active" onClick={toggleMenu}>
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink exact to="contact" className="co_white" activeClassName="active" onClick={toggleMenu}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
