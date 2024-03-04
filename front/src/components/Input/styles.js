import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > label {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.Light_500};
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.Dark_200};
  color: ${({ theme }) => theme.COLORS.Light_700};

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.Light_500};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.Light_400};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
