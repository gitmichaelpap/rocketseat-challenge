import styled from "styled-components";

export const Container = styled.div`
  width: 10rem;
  height: 100%;
  min-width: 10rem;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`;

export const BoxImageLike = styled.div`
  width: 100%;
  height: 50%;
  min-height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`;

export const Like = styled.button`
  border: 0;
  border-radius: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.Light_200};
  position: relative;
  top: -3rem;
  left: -0.4rem;

  > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const Imagem = styled.div`
  position: relative;
  left: 0.7rem;
  height: 80%;
  overflow: hidden;

  > img {
    width: 100%;
  }
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  padding: 0rem 0.01rem;
`;

export const Title = styled.div`
  background-color: transparent;
  text-align: center;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Sinal = styled.div`
  background-color: transparent;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
`;

export const Value = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  text-align: center;
  font-weight: 500;

  color: ${({ theme }) => theme.COLORS.Tints_Cake_100};
`;

export const QtdBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Action = styled.button`
  width: 100%;
  height: 10%;
  border: 0;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.COLORS.Tints_Tomato_300};
`;
