import React, { Component, Fragment } from 'react';
import Tilt from '../tilt/Tilt';
import {
  Container,
  Paragraph,
  Form,
  InputSection,
  Input,
  Button,
  Breakdown,
  Chevron,
} from './index.styles';

class CalculatorPage extends Component {
  constructor() {
    super();
    this.state = {
      salary: '',
      tax: null,
      bracket: '',
    };
  }

  taxBracketCalculator = salary => {
    if (salary <= 11500) {
      return 'Personal Allowance';
    } else if (salary <= 45000) {
      return 'Basic Rate';
    } else if (salary <= 150000) {
      return 'Higher Rate';
    } else {
      return 'Additional Rate';
    }
  };

  incomeTaxCalculator = (salary, bracket) => {
    const taxBrackets = {
      'Personal Allowance': 0,
      'Basic Rate': 0.2,
      'Higher Rate': 0.4,
      'Additional Rate': 0.45,
    };
    switch (bracket) {
      case 'Personal Allowance':
        return '0';
      case 'Basic Rate':
        return (salary - 11500) * taxBrackets[bracket];
      case 'Higher Rate':
        return (salary - 45000) * taxBrackets[bracket] + (45000 - 11500) * 0.2;
      default:
        return (
          (salary - 150000) * taxBrackets[bracket] +
          (150000 - 45000) * 0.4 +
          (45000 - 11500) * 0.2
        );
    }
  };

  handleSalaryInput = e => {
    this.setState({ salary: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { salary } = this.state;
    const bracket = this.taxBracketCalculator(salary);
    const incomeTax = this.incomeTaxCalculator(salary, bracket);
    this.setState({ tax: incomeTax, bracket: bracket });
  };

  render() {
    return (
      <Container id="calculator">
        <Form onSubmit={this.handleSubmit}>
          <InputSection>
            <Paragraph>I earn £</Paragraph>
            <label htmlFor="salaryinput" />
            <Input
              id="salaryinput"
              name="salaryinput"
              type="number"
              value={this.state.salary}
              onChange={this.handleSalaryInput}
            />
            <Paragraph>a year</Paragraph>
          </InputSection>
          <Button type="submit">SHOW ME THE MONEY!</Button>
          {this.state.tax ? (
            <Fragment>
              <Paragraph>
                You pay <strong>£{this.state.tax}</strong> a year in tax
              </Paragraph>
              <Paragraph>
                as you are in the <strong>{this.state.bracket}</strong> tax
                bracket
              </Paragraph>
            </Fragment>
          ) : null}
        </Form>
        <Breakdown>Break it down!</Breakdown>
        <Tilt>
          <a href="#info">
            <Chevron src="chevron.svg" />
          </a>
        </Tilt>
      </Container>
    );
  }
}

export default CalculatorPage;
