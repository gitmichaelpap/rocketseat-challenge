import styled from "styled-components";

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
  gap: 1rem;

  font-size: 2.328rem;

  color: ${({ theme }) => theme.COLORS.Light_100};
`;

export const Form = styled.form`
  min-width: 316px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  text-align: center;
`;
