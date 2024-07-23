import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/breakpoints";

export const HeaderContainer = styled.header`
  grid-area: header;

  height: 80px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  text-align: center;

  .favorites {
    padding: 0px;
    margin: 0rem 0.5rem;
    max-width: 8rem;
    border: 0;
    background: none;

    line-height: 100%;

    color: ${({ theme }) => theme.COLORS.Light_200};
  }
  .new,
  .orders {
    padding: 0px;
    margin: 0rem 0.5rem;
    max-width: 21.6rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    height: 40px;
  }
`;

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  padding: 0.6rem 3.2rem;
  margin: 0 auto;
  width: min(112rem, 100%);

  background-color: ${({ theme }) => theme.COLORS.Dark_700};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.MD}) {
    padding: 0;

    .logo {
      gap: 0.01rem;
      font-size: 2rem;
    }
    .logo-svg {
      height: 2rem;
    }
  }
`;

export const Menu = styled.button`
  background: transparent;
  border: none;
  display: none;

  > svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.Light_300};
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    display: block;
    width: auto;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;

  @media (max-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const Requests = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;

  margin-right: 1.6rem;
  color: ${({ theme }) => theme.COLORS.Light_100};

  border: 0;
  border-radius: 0.3rem;

  width: 12rem;
  background-color: ${({ theme }) => theme.COLORS.Tints_Tomato_200};

  padding: 1rem;

  > svg {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.Light_100};
    font-size: 1.7rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    width: auto;
    background-color: transparent;
    margin-right: 0;

    > div {
      display: none;
    }

    > svg {
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.Light_100};
      font-size: 1.7rem;
    }
  }
`;

export const Logout = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.Light_100};
    font-size: 1.7rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;
