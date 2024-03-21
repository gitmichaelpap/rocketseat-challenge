import { FaRegHeart } from "react-icons/fa";

import { AddRemove } from "../AddRemove";
import { ButtonText } from "../ButtonText";

import {
  Action,
  BoxImageLike,
  BoxTitle,
  Container,
  Imagem,
  Like,
  QtdBox,
  Sinal,
  Title,
  Value,
} from "./styles";

export const BoxFood = ({ id, imgSRC, title, value }) => {
  return (
    <Container>
      <BoxImageLike>
        <Imagem>
          <img src={imgSRC} />
        </Imagem>
        <Like>
          <FaRegHeart />
        </Like>
      </BoxImageLike>
      <BoxTitle>
        <Title>{title}</Title>
        <Sinal>{">"}</Sinal>
      </BoxTitle>
      <Value>{value}</Value>
      <QtdBox>
        <AddRemove />
      </QtdBox>
      <Action>
        <ButtonText title={"incluir"} />
      </Action>
    </Container>
  );
};
