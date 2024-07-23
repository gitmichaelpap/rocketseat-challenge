import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.Dark_100};
`;

export const Banner = styled.div`
  width: 100%;

  height: 10rem;
  margin-top: 2rem;
  padding-right: 0.6rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.Dark_1000};

  @media (max-width: ${BREAKPOINTS.MD}) {
    height: 6rem;
    margin-top: 1rem;
    padding-right: 0.6rem;
  }
`;

export const SvgBanner = styled.div`
  display: flex;
  margin-left: -2rem;
  margin-top: 1rem;

  > svg {
    width: 20rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    display: flex;
    margin-left: -1rem;
    margin-top: 0.35rem;

    > svg {
      width: 10rem;
    }
  }
`;

export const TextBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;
`;

export const TitleBanner = styled.div`
  font-size: 2.7rem;
  color: ${({ theme }) => theme.COLORS.Light_300};
  font-family: "Poppins";
  font-weight: 500;

  @media (max-width: ${BREAKPOINTS.MD}) {
    font-size: 1.2rem;
  }
`;

export const BodyBanner = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.COLORS.Light_300};
  font-family: "Poppins";
  @media (max-width: ${BREAKPOINTS.MD}) {
    font-size: 0.7rem;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Section = styled.div`
  width: 100%;
  height: 21rem;
  min-height: 21rem;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleBody = styled.div`
  font-weight: 700;
`;

export const BodyList = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 0.7rem;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;
