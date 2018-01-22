import React, { Component } from 'react';
import { Container, InputSection, Input } from './index.styles';

class CalculatorPage extends Component {
  constructor() {
    super();
    this.state = {
      salary: '',
      tax: null
    };
  }

  handleSalaryInput = e => {
    this.setState({ salary: e.target.value });
  };

  render() {
    const { salary } = this.state.salary;

    const handleClick = e => {
      e.preventDefault();
      const bracket = taxBracketCalculator(salary);
      console.log(bracket);
      const incomeTax = incomeTaxCalculator(salary, bracket);
      console.log(incomeTax);
      this.setState({ tax: incomeTax });
    };

    const taxBracketCalculator = salary => {
      switch (salary) {
        case salary <= 11500:
          return 'Personal Allowance';
        case salary <= 45000:
          return 'Basic Rate';
        case salary <= 150000:
          return 'Higher Rate';
        case salary > 150000:
          return 'Additional Rate';
        default:
          return null;
      }
    };

    const incomeTaxCalculator = (salary, bracket) => {
      const taxBrackets = {
        'Personal Allowance': 0,
        'Basic Rate': 0.2,
        'Higher Rate': 0.4,
        'Additional Rate': 0.45
      };
      if (bracket === 'Personal Allowance') {
        return 0;
      } else if (bracket === 'Basic Rate') {
        return (salary - 11500) * taxBrackets[bracket];
      } else if (bracket === 'Higher Rate') {
        return (salary - 45000) * taxBrackets[bracket] + (45000 - 11500) * 0.2;
      } else if (bracket === 'Additional Rate') {
        return (
          (salary - 150000) * taxBrackets[bracket] +
          (150000 - 45000) * 0.4 +
          (45000 - 11500) * 0.2
        );
      }
    };

    return (
      <Container>
        <h1>Calculator</h1>
        <InputSection>
          <p>I earn £</p>
          <Input
            type="number"
            value={this.state.salary}
            onChange={e => this.handleSalaryInput(e)}
          />
          <p>a year</p>
        </InputSection>
        <button onClick={handleClick}>Calculate income tax</button>
        {this.state.tax ? <p>You pay {this.state.tax} a year in tax</p> : null}
      </Container>
    );
  }
}

export default CalculatorPage;
