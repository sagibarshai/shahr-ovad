import styled from "styled-components";

export const NavWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.l};

  display: flex;
  flex-direction: row;
  gap: 40px;
  direction: rtl;
  z-index: 100;
`;
