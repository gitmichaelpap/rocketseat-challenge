import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { Logo } from "../Logo";
import { Search } from "../Search";

import {
  Container,
  HeaderContainer,
  Logout,
  Menu,
  Requests,
  SearchContainer,
} from "./styles";

import { useAuth } from "@/hooks/auth";

export const Header = ({ onOpenMenu }) => {
  const { signOut } = useAuth();

  const navigation = useNavigate();

  const handleSingOut = () => {
    signOut();
    navigation("/");
  };

  return (
    <HeaderContainer>
      <Container>
        <Menu onClick={onOpenMenu}>
          <BsList></BsList>
        </Menu>
        <Logo />

        <SearchContainer>
          <Search />
        </SearchContainer>

        <Requests>
          <PiReceiptLight />
          <div>Pedidos(0)</div>
        </Requests>

        <Logout onClick={handleSingOut}>
          <FiLogOut />
        </Logout>
      </Container>
    </HeaderContainer>
  );
};
