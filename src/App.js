import React, { Component } from 'react';
import finimize from './finimize.png';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={finimize} alt="finimize-logo" />
          <h1>Tax Calculator</h1>
        </header>
      </div>
    );
  }
}

export default App;
