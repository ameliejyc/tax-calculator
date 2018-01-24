import React from 'react';
import Tilt from '../tilt/Tilt';
import { Container, Header, Subheader, Chevron } from './index.styles';

const LandingPage = () => {
  return (
    <Container>
      <Header>
        INCOME TAX IS COOL
        <span role="img" aria-label="cool emoji">
          😎
        </span>
      </Header>
      <Subheader>
        Income tax deducted from your salary gets spent on a wide range of
        things which make everyone's lives better. We're talking health care,
        education, welfare, environment protection, transport, and much, much
        more.
      </Subheader>
      <Subheader>
        Use this income tax calculator to find out how much you're contributing
        through how much you earn.
      </Subheader>
      <Tilt>
        <a href="#calculator">
          <Chevron alt="down arrow" src="chevron.svg" />
        </a>
      </Tilt>
    </Container>
  );
};

export default LandingPage;
