import { RiShutDownLine } from "react-icons/ri";

import { Container, Logout, Profile } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/rodrigorgtic.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rodrigo Gonçalves</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
};
