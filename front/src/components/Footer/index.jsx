import { Logo } from "../Logo";

import { Container, FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Logo />
        <div>{"@ 2023 - Todos os direitos reservados"}</div>
      </Container>
    </FooterContainer>
  );
};
