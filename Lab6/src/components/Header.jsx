import React from 'react';

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-inner">
        <div className="logo">Udemy</div>
        <nav className="nav">
          <a className="nav-link" href="#">Explore</a>
          <a className="nav-link" href="#">Plans & Pricing</a>
          <a className="nav-link" href="#">Udemy Business</a>
          <a className="nav-link" href="#">Teach on Udemy</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for anything" className="search-input" />
        </div>
        <div className="auth-buttons">
          <button className="btn login">Log in</button>
          <button className="btn signup">Sign up</button>
        </div>
      </div>
    </header>
  );
}
