import {
  Banner,
  Body,
  BodyBanner,
  BodyList,
  Container,
  SvgBanner,
  TextBanner,
  TitleBanner,
  TitleBody,
} from "./styles";

import Pngegg from "@/assets/pngegg.svg?react";

const Home = () => {
  return (
    <Container>
      <Banner>
        <SvgBanner>
          <Pngegg />
        </SvgBanner>
        <TextBanner>
          <TitleBanner>Sabores inigualáveis</TitleBanner>
          <BodyBanner>
            Sinta o cuidado do preparo com ingredientes selecionados.
          </BodyBanner>
        </TextBanner>
      </Banner>
      {/* <Body>
        <TitleBody>Sabores inigualáveis</TitleBody>
        <BodyList>
          Sinta o cuidado do preparo com ingredientes selecionados.
        </BodyList>
      </Body> */}
    </Container>
  );
};

export default Home;
