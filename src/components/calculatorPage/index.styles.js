import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
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
`;

export const Paragraph = styled.p`
  margin: 2rem 0;
  font-size: 2.5rem;
`;

export const Input = styled.input`
  width: 15rem;
  margin: 0.5rem;
  font-size: 2.5rem;
  border: 5px solid white;
  border-radius: 15px;
  text-align: center;
`;

export const Button = styled.button`
  width: 35rem;
  padding: 2rem;
  font-size: 2.5rem;
  font-style: italic;
  background-color: orange;
  border: 5px solid white;
  border-radius: 15px;
`;

export const Chevron = styled.img`
  width: 75px;
  cursor: pointer;
`;
