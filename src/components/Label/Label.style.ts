import styled, { css } from "styled-components";

type LabelStyledProps = {
  sideBySide?: boolean;
  isRequired?: boolean;
};

export const LabelStyled = styled.label<LabelStyledProps>`
  display: flex;
  flex-direction: column;

  span {
    text-transform: capitalize;
  }

  ${({ isRequired }) =>
    isRequired &&
    css`
      & span {
        ::after {
          content: " *";
          color: red;
        }
      }
    `}

  ${({ sideBySide }) =>
    sideBySide &&
    css`
      flex-direction: row;
      align-items: center;
      & input {
        margin-left: 2rem;
        margin-bottom: 8px;
      }
    `}
`;
