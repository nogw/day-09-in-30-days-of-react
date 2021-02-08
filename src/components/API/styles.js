import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  h2 {
    font-family: monospace;
    margin: 10px;
    color: #a1a1a1
  } 
`;

export const Text = styled.h1`
  font-family: monospace;
  text-align: center;  
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const Button = styled.button`
  font-family: monospace;
  transition: 300ms ease transform;  
  background-color: #f8e426;
  margin: 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  color: #212121; 
  padding: 10px;
  border: none;
  width: 90%;

  &:hover {
    transform: scale(1.02)
  }

  &:active {
    transform: scale(0.98)
  }
`;
