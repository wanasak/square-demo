import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import SimpleSquare from './SimpleSquare';
import Hideable from './Hideable';

const HideSquareComponent = Hideable(Square);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <SimpleSquare size={50} />
        <Square size={50} />
        <Square initialColor="blue" size={100} />
        <Square showSubTitle={false} initialColor="green" size={150} />
        <HideSquareComponent isHiddent={false} initialColor="pink" size={100} />
      </div>
    );
  }
}

export default App;
