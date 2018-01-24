import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 1rem 8rem;
`;

export const Subheader = styled.h3`
  margin: 2rem 0;
  font-size: 3rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin: 1rem 0 2rem;
  font-size: 2rem;
  color: #0f0e0b;
  font-style: italic;
`;

export const Table = styled.table`
  font-size: 2rem;
  text-align: center;
`;

export const Heading = styled.th`
  padding: 2rem 5rem;
  text-decoration: underline;
`;
