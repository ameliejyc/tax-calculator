import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputSection = styled.section`
  display: flex;
  align-items: center;
  margin: 3rem 0;
`;

export const Paragraph = styled.p`
  margin: 1rem 0;
  font-size: 2.5rem;
`;

export const Input = styled.input`
  width: 15rem;
  margin: 0.5rem;
  font-size: 3rem;
  border: 3px solid #0f0e0b;
  border-radius: 30px;
  text-align: center;
`;

export const Button = styled.button`
  width: 35rem;
  margin-bottom: 1rem;
  padding: 2rem;
  font-size: 2.5rem;
  font-style: italic;
  color: #fcfcfc;
  background-color: #e58d00;
  border: 5px solid #0f0e0b;
  border-radius: 60px;

  &:hover {
    background-color: #d373a0;
  }
`;

export const Breakdown = styled.p`
  margin: 2rem;
  font-size: 2.5rem;
`;

export const Chevron = styled.img`
  width: 75px;
  cursor: pointer;
`;
