import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
          <nav className="mdl-navigation">
            <span className="mdl-layout-title p-0">Radek Kučera</span>
            <i className="material-icons margin-l-4">face</i>
          </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
