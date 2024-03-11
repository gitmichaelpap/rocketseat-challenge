import { Input } from "../Input";

import { Container } from "./styles";

export const Search = () => {
  return (
    <Container>
      <Input
        id="search"
        type="text"
        placeholder="Pesquise por pratos ou ingredientes"
      />
    </Container>
  );
};
