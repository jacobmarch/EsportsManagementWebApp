import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">LOGO</div>
      <Link to="/" className="app-name">
        Esports Organization Manager
      </Link>
    </header>
  );
}

export default Header;
