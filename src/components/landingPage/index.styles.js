import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 4em 8em;
`;

export const Header = styled.h1`
  margin: 0.5em 0;
  font-size: 5em;
  font-style: italic;
  border-bottom: 10px solid #0f0e0b;
`;

export const Subheader = styled.h2`
  margin-bottom: 1em;
  font-size: 2.5em;
  text-align: center;
`;

export const Chevron = styled.img`
  width: 75px;
  cursor: pointer;
`;
