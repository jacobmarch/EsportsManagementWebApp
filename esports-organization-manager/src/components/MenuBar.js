import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';

function MenuBar() {
  return (
    <nav className="menu-bar">
      <NavLink to="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/schedule" activeClassName="active">
        Schedule
      </NavLink>
      <NavLink to="/personnel" activeClassName="active">
        Personnel
      </NavLink>
    </nav>
  );
}

export default MenuBar;
