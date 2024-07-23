import { useEffect, useState } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import { Container, Content } from "./styles";

import { ButtonText } from "@/components/ButtonText";
import { Favorite } from "@/components/Favorite";
import { api } from "@/services/api";

const Favorites = ({ isAdmin }) => {
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await api.get("/favorites");
        setFavorites(response.data);
      } catch (error) {
        console.log("Erro ao buscar favoritos:", error);
      }
    };

    fetchFavorites();
  }, []);

  const removeFavorite = async (dishId) => {
    try {
      await api.delete(`/favorites/${dishId}`);

      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== dishId),
      );
    } catch (error) {
      console.log("Erro ao atualizar favoritos:", error);
    }
  };

  return (
    <Container>
      {favorites && (
        <div>
          <header>
            <ButtonText onClick={handleBack}>
              <RxCaretLeft />
              voltar
            </ButtonText>

            <h1>Meus favoritos</h1>
          </header>

          <Content>
            {favorites.map((favorite) => (
              <Favorite
                key={String(favorite.id)}
                data={favorite}
                removeFavorite={removeFavorite}
              />
            ))}
          </Content>
        </div>
      )}
    </Container>
  );
};

export default Favorites;
