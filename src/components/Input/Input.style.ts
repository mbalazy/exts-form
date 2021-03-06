import styled, { css } from "styled-components";

type InputStyledProps = {
  withGreenStyle?: boolean;
  withRedStyle?: boolean;
};

export const InputStyled = styled.input<InputStyledProps>`
  height: 4rem;
  margin-top: 1rem;
  padding: 0.8rem;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.black};

  ${({ withGreenStyle }) =>
    withGreenStyle &&
    css`
      border: 2px solid green;
      & + .icons {
        display: block;
        background-image: url("./ok.svg");
      }
    `}

  ${({ withRedStyle }) =>
    withRedStyle &&
    css`
      border: 2px solid red;
      & + .icons {
        display: block;
        background-image: url("./err.svg");
      }
    `}
`;
