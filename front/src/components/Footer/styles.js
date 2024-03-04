import styled from "styled-components";

export const FooterContainer = styled.footer`
  grid-area: footer;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  text-align: center;
`;

export const Container = styled.footer`
  padding: 0.6rem 3.2rem;
  margin: 0 auto;
  width: min(90rem, 100%);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  .logo-title {
    color: ${({ theme }) => theme.COLORS.Light_500};
  }
`;
