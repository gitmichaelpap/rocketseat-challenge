import { Logo } from "../Logo";

import { Container, FooterContainer, LogoContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        {"@ 2023 - Todos os direitos reservados"}
      </Container>
    </FooterContainer>
  );
};
