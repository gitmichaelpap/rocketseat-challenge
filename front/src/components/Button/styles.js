import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.Tints_Tomato_100};
  color: ${({ theme }) => theme.COLORS.Light_100};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 5px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
