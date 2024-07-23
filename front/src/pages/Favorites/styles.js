import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    width: 100%;
    grid-area: content;
    justify-self: center;

    > div {
      h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.Light_200};
      }
    }
  }

  @media (min-width: 1024px) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 0.8rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.Dark_500};
        border-radius: 0.8rem;
      }
    }
  }
`;

export const Content = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    gap: 4.8rem;
  }
`;
