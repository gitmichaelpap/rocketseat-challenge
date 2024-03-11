import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { Search } from "../Search";

import { Button, Container, Header, Nav, Title } from "./styles";

import { useAuth } from "@/hooks/auth";

export const SideMenu = ({ menuIsOpen, onCloseMenu }) => {
  const { signOut } = useAuth();

  const navigation = useNavigate();

  const handleSingOut = () => {
    signOut();
    navigation("/");
  };

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        {menuIsOpen && (
          <Button onClick={onCloseMenu}>
            <IoCloseOutline />
          </Button>
        )}
        <Title>{"Menu"}</Title>
      </Header>

      <Nav>
        <Search />
        <a onClick={handleSingOut}>{"SAIR"}</a>
      </Nav>
    </Container>
  );
};
