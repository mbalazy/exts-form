import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: ${({theme}) => theme.dimensions.headerHeight};
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.black};
`;
