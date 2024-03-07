import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { Input } from "../Input";
import { Logo } from "../Logo";

import { Container, HeaderContainer, Logout, Requests, Search } from "./styles";

import { useAuth } from "@/hooks/auth";

export const Header = () => {
  const { signOut } = useAuth();

  const navigation = useNavigate();

  const handleSingOut = () => {
    signOut();
    navigation("/");
  };

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

        <Logout onClick={handleSingOut}>
          <FiLogOut />
        </Logout>
      </Container>
    </HeaderContainer>
  );
};
