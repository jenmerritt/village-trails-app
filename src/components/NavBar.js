import React from 'react';
import './styles/NavBar.css';

function NavBar() {
    return (
      <div className="nav-bar-wrapper">
        <div className="nav-bar-left">
            <h1>Explore Crayke</h1>
        </div>
        <div className="nav-bar-center">
            <img src="../header-image.png" id="header-image" alt="village-icon" />
        </div>
        <div className="nav-bar-right">
            <p><a className="nav-link" href="http://www.craykehistory.uk" target="_blank" rel="noopener noreferrer">Crayke History Website</a></p>
        </div>
      </div>
    );
  }

export default NavBar;
