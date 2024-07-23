import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
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
  const { user, signOut } = useAuth();

  const isAdmin = user.is_admin;

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navigate = useNavigate();

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleNew() {
    navigate("/new");
  }

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

        {isDesktop && (
          <Button
            className="favorites"
            title="Meus favoritos"
            onClick={handleFavorites}
          />
        )}

        {isAdmin ? (
          isDesktop && (
            <Button
              className="new"
              title="Novo prato"
              onClick={handleNew}
            />
          )
        ) : (
          <Requests>
            <PiReceiptLight />
            <div>Pedidos(0)</div>
          </Requests>
        )}

        <Logout onClick={handleSingOut}>
          <FiLogOut />
        </Logout>
      </Container>
    </HeaderContainer>
  );
};
