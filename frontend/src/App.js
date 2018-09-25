import React, { Component } from 'react';
import './styles/App.css';
import './styles/Gui.css';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Body from './components/MainBody';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Header/>
        <div className="container">
        
        <Body/>

        </div>
      </div>
    );
  }
}

export default App;
