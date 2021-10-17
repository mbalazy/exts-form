import styled from "styled-components";

export const SubmitButtonStyled = styled.button`
  background-color: #0da574;
  color: white;
  font-size: 16px;
  height: 5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #7eafa0;
    cursor: default;
  }
`;
