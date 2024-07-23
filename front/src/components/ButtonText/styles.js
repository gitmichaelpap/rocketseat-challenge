import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 140%;

  color: ${({ theme }) => theme.COLORS.Light_100};

  display: flex;
  align-items: center;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.Light_100};
  }

  @media (min-width: 1024px) {
    font-weight: 700;
  }
`;
