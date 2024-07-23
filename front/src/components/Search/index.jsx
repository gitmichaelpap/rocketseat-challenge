import { Input } from "../Input";

import { Container } from "./styles";

import { useSearch } from "@/hooks/search";

export const Search = () => {
  const { search, setSearch } = useSearch();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Input
        id="search"
        type="text"
        placeholder="Pesquise por pratos ou ingredientes"
        value={search}
        onChange={onChange}
      />
    </Container>
  );
};
