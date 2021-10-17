import styled from "styled-components";

export const FormStyled = styled.form`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 70vw;
  max-width: 40rem;
  border-radius: 10px;
  padding: 5rem;
  display: grid;
  gap: 3rem;
`;
