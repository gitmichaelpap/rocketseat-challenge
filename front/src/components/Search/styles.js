import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.Light_100};
  width: 95%;
  padding: 0 1.6rem;
  background-color: transparent;

  input {
    border: 0;
    border-radius: 0.3rem;

    font-size: 1rem;
    text-align: center;

    color: ${({ theme }) => theme.COLORS.Light_100};
    background-color: ${({ theme }) => theme.COLORS.Dark_1000};
  }

  input::placeholder {
    opacity: 0.56;
    color: ${({ theme }) => theme.COLORS.Light_100};
  }
`;
