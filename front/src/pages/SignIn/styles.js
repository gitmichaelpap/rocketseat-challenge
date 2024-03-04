import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/breakpoints";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Logo = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1rem;

  font-size: 2.328rem;

  color: ${({ theme }) => theme.COLORS.Light_100};
`;

export const Form = styled.form`
  min-width: 316px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10rem;
  @media (max-width: ${BREAKPOINTS.MD}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Title = styled.h1`
  @media (max-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const ContainerInputs = styled.div`
  gap: 1.5rem;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.MD}) {
    position: relative;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 31.25rem;
    width: 21.563rem;
    background-color: ${({ theme }) => theme.COLORS.Dark_900};
    padding: 2rem;
  }
`;
