import { Container } from "./styles";

import Polygon from "@/assets/polygon.svg?react";

export const Logo = () => {
  return (
    <Container className={"logo"}>
      <Polygon className={"logo-svg"} />
      <h6 className={"logo-title"}>food explorer</h6>
    </Container>
  );
};
