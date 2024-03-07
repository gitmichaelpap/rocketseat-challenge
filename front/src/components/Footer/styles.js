import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/breakpoints";

export const FooterContainer = styled.footer`
  grid-area: footer;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  text-align: center;

  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.MD}) {
    height: 32px;
  }
`;

export const Container = styled.footer`
  padding: 0.6rem 3.2rem;
  margin: 0 auto;
  width: min(90rem, 100%);

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;

  .logo {
    gap: 0.01rem;
  }

  .logo-title {
    color: ${({ theme }) => theme.COLORS.Light_500};
  }

  .logo-svg {
    > * {
      fill: ${({ theme }) => theme.COLORS.Light_500};
    }

    height: 2rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    padding: 0.5rem;
    justify-content: space-around;

    > div {
      font-size: 0.8rem;
    }
    .logo {
      font-size: 1.5rem;
    }
    .logo-svg {
      height: 1.5rem;
    }
  }
`;
