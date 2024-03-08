import { useState } from "react";

import { Container, Content } from "./styles";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";

const Root = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Root;
