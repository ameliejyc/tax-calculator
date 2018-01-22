import React, { Component } from 'react';
import { Container } from './index.styles';

class CalculatorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: null,
      tax: null
    };
  }
  render() {
    return (
      <Container>
        <h1>Calculator</h1>
      </Container>
    );
  }
}

export default CalculatorPage;
