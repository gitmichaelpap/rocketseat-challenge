import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import { Input } from "../Input";
import { Logo } from "../Logo";

import { Container, HeaderContainer, Logout, Requests, Search } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo />

        <Search>
          <Input
            id="search"
            type="text"
            placeholder="Pesquise por pratos ou ingredientes"
          />
        </Search>

        <Requests>
          <PiReceiptLight />
          Pedidos(0)
        </Requests>

        <Logout>
          <FiLogOut />
        </Logout>
      </Container>
    </HeaderContainer>
  );
};
