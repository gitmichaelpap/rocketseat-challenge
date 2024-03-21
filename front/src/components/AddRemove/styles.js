import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
`;

export const RemBtn = styled.button`
  width: 100%;
  height: 100%;
  border: 0.1px solid red;
  border-radius: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.Light_200};
  text-align: center;
  font-weight: 500;
`;

export const Qntd = styled.div`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0.3rem;
  background-color: transparent;
  text-align: center;
`;

export const AddBtn = styled.button`
  width: 100%;
  height: 100%;
  border: 0.1px solid green;
  border-radius: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.Light_200};
  text-align: center;
`;
