import { Container, Content } from "./styles";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Root = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Root;
