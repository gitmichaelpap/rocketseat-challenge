import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.Dark_100};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: calc(100% - 6.4rem);
  margin: 1.1rem 3.2rem 5.3rem;

  > header {
    display: flex;
    flex-direction: column;

    h1 {
      margin-top: 2.4rem;

      font-family: "Poppins", sans-serif;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.Light_200};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    section {
      width: 100%;
    }

    section input {
      background-color: ${({ theme }) => theme.COLORS.Dark_600};
      border-radius: 0.8rem;
    }
  }

  @media (min-width: 1024px) {
    gap: 3.2rem;

    width: calc(100% - 24.8rem);
    margin: 4rem 12.4rem 11.6rem;

    > div {
      flex-direction: row;
      gap: 3.2rem;

      :first-of-type {
        section:nth-of-type(1) {
          max-width: 22.9rem;
        }

        section:nth-of-type(3) {
          max-width: 36.4rem;
        }
      }

      :nth-of-type(2) {
        section:nth-of-type(2) {
          max-width: 25.1rem;
        }
      }
    }
  }
`;

export const Image = styled.div`
  padding: 1.2rem 3.2rem;
  border-radius: 0.8rem;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.Dark_600};
  color: ${({ theme }) => theme.COLORS.Light_100};

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.Light_100};
  }

  > label {
    display: flex;
    gap: 0.8rem;
    cursor: pointer;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      max-width: calc(100vw - 16rem);
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      width: 100%;
    }

    svg,
    span {
      transition: filter 0.2s;
    }

    &:hover {
      svg,
      span {
        filter: brightness(0.9);
      }
    }
  }

  @media (min-width: 1024px) {
    > label {
      span {
        max-width: 13.3rem;
      }

      input {
        max-width: 22.9rem;
      }
    }
  }
`;

export const Category = styled.div`
  > label {
    position: relative;

    select {
      border: none;
      -webkit-appearance: none;
      cursor: pointer;

      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: 0.8rem;

      background-color: ${({ theme }) => theme.COLORS.Dark_600};
      color: ${({ theme }) => theme.COLORS.Light_100};

      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.Light_100};

      position: absolute;
      top: 0;
      right: 1.6rem;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
`;
