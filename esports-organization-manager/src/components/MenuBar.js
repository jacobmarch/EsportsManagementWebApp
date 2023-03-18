import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

function MenuBar() {
  return (
    <nav className="menu-bar">
      <Link to="/schedule">Schedule</Link>
      <Link to="/personnel">Personnel</Link>
    </nav>
  );
}

export default MenuBar;
