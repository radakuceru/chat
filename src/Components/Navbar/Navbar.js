import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">RK Chat</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="#">Profil</a>
            <a className="mdl-navigation__link" href="#">Konverzace</a>
            <a className="mdl-navigation__link" href="#">Link</a>
            <a className="mdl-navigation__link" href="#">Link</a>
          </nav>
        </div>
    );
  }
}

export default Navbar;
