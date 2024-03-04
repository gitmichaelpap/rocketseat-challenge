import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 80px auto 64px;
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 1.6rem 3.2rem;
  width: min(112rem, 100%);
  margin: 0 auto;
  overflow-y: auto;
`;
