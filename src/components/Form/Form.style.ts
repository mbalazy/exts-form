import styled from "styled-components";


type InputStyledProps = {
  isValid?: boolean;
  lenght?: number;
};

export const FormStyled = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 80vw;
  max-width: 35rem;
  padding: 3rem;
  display: grid;
  gap: 2.3rem;
`;

export const InputStyled = styled.input<InputStyledProps>`
  height: 4rem;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
