import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: ${({ theme }) => theme.dimensions.headerHeight};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;

  h1 {
    margin-left: 2rem;
  }
`;
