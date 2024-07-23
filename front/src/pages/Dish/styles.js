import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.Dark_100};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: 1.6rem;

  > img {
    width: 100%;
    max-width: 26.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    text-align: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 2.7rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.Light_200};
    }

    p {
      font-family: "Poppins", sans-serif;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.Light_200};
    }

    section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4.7rem;
    margin-top: 4.2rem;

    > img {
      max-width: 39rem;
    }

    > div {
      text-align: left;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
      }

      section {
        justify-content: initial;
        gap: 1.2rem;
      }
    }
  }
`;
