import styled from "styled-components";

export const FormStyled = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 80vw;
  max-width: 35rem;
  padding: 3rem;
  display: grid;
  gap: 2.3rem;
`;
