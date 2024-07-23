import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { ButtonText } from "../ButtonText";
import { Search } from "../Search";

import { Container } from "./styles";

export const Menu = ({
  isAdmin,
  isMenuOpen,
  setIsMenuOpen,
  setSearch,
  isDisabled,
}) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleNew() {
    navigate("/new");
  }

  function handleFavorites() {
    navigate("/favorites");
  }

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Header
        isAdmin={isAdmin}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <Search
          isDisabled={isDisabled}
          setSearch={setSearch}
        />

        {isAdmin ? (
          <ButtonText onClick={handleNew}>Novo prato</ButtonText>
        ) : null}

        <ButtonText onClick={handleFavorites}>Meus favoritos</ButtonText>

        <ButtonText onClick={handleSignOut}>Sair</ButtonText>
      </main>
    </Container>
  );
};
