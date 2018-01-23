import React, { Component, Fragment } from 'react';
import LandingPage from './landingPage';
import CalculatorPage from './calculatorPage';
import InfoPage from './infoPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <LandingPage />
        <CalculatorPage />
        <InfoPage />
      </Fragment>
    );
  }
}

export default App;
