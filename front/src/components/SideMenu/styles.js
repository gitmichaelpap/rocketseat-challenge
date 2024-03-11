import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/breakpoints";

export const Container = styled.aside`
  grid-area: none;
  background-color: ${({ theme }) => theme.COLORS.Dark_700};
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  display: none;

  @media (max-width: ${BREAKPOINTS.MD}) {
    display: none;
    grid-area: menu;
    position: absolute;
    z-index: 1;

    &[data-menu-is-open="true"] {
      display: block;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: 0.6rem 0.6rem;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 7;
  color: ${({ theme }) => theme.COLORS.Light_100};
  font-size: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.7rem;
  height: 87vh;
  padding-top: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.Dark_400};

  > a {
    color: ${({ theme }) => theme.COLORS.Light_100};
    display: flex;
    align-items: center;
    gap: 7;
    padding-left: 1.5rem;
    height: 56px;
    font-size: 1.2rem;
    border: 1px solid ${({ theme }) => theme.COLORS.Dark_900};

    &[data-menu-active="true"] {
      background-color: ${({ theme }) => theme.COLORS.Light_100};
      color: ${({ theme }) => theme.COLORS.Light_100};
    }
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.Light_100};
  }
`;
