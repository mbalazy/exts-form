import styled, { css } from "styled-components";

type InputStyledProps = {
  withGreenBorder?: boolean;
  withRedBorder?: boolean;
};

export const InputStyled = styled.input<InputStyledProps>`
  height: 4rem;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  ${({ withGreenBorder }) =>
    withGreenBorder &&
    css`
      border: 1px solid green;
    `}

  ${({ withRedBorder }) =>
    withRedBorder &&
    css`
      border: 1px solid red;
    `}
`;
