import React, { Component, Fragment } from 'react';
import LandingPage from './landingPage';
import CalculatorPage from './calculatorPage';
import InfoPage from './infoPage';
import { Container } from './App.styles';

class App extends Component {
  render() {
    return (
      <Container>
        <LandingPage />
        <CalculatorPage />
        <InfoPage />
      </Container>
    );
  }
}

export default App;
