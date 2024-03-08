import styled from "styled-components";

import { BREAKPOINTS } from "@/styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 80px auto 64px;
  grid-template-areas:
    "header"
    "content"
    "footer ";

  @media (max-width: ${BREAKPOINTS.MD}) {
    grid-template-columns: 0px auto;
    grid-template-rows: 40px auto 32px;
    grid-template-areas:
      "menu header"
      "menu content"
      "footer footer ";
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 1.6rem 3.2rem;
  width: min(112rem, 100%);
  margin: 0 auto;
  overflow-y: auto;
`;
