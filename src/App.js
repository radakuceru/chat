import React, { Component } from 'react';
import './App.css';
import '../node_modules/material-design-lite/material.min.js';
import Navbar from './Components/Navbar/Navbar';
import Chat from './Components/Chat/Chat';
import Header from './Components/Header/Header';
import BubblePrimary from './Components/BubblePrimary/BubblePrimary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <Header />
          <Navbar />
          <main className="mdl-layout__content">
            <div className="page-content">
              <BubblePrimary />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
