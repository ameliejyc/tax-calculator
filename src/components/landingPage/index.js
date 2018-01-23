import React from 'react';
import Tilt from '../tilt/Tilt';
import { Container, Header, Subheader, Chevron } from './index.styles';

const LandingPage = () => {
  return (
    <Container>
      <Header>
        TAXES ARE COOL{' '}
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
        Use our salary calculator to find out how much income tax you're
        contributing.
      </Subheader>
      <Tilt>
        <Chevron src="chevron.svg" />
      </Tilt>
    </Container>
  );
};

export default LandingPage;
