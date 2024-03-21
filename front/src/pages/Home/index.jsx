import {
  Banner,
  Body,
  BodyBanner,
  BodyList,
  Container,
  Section,
  SvgBanner,
  TextBanner,
  TitleBanner,
  TitleBody,
} from "./styles";

import Pngegg from "@/assets/pngegg.svg?react";
import { BoxFood } from "@/components/BoxFood";
import { refeicoes } from "@/Mock/refeicoes";

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
      <Body>
        <Section>
          <TitleBody>Refeições</TitleBody>
          <BodyList>
            {refeicoes.map((x) => (
              <BoxFood
                key={x.id}
                id={x.id}
                imgSRC={x.imgSRC}
                title={x.title}
                value={x.value}
              />
            ))}
          </BodyList>
        </Section>
        <Section>
          <TitleBody>Sobremesas</TitleBody>
          <BodyList>
            {refeicoes.map((x) => (
              <BoxFood
                key={x.id}
                id={x.id}
                imgSRC={x.imgSRC}
                title={x.title}
                value={x.value}
              />
            ))}
          </BodyList>
        </Section>
        <Section>
          <TitleBody>Bebidas</TitleBody>
          <BodyList>
            {refeicoes.map((x) => (
              <BoxFood
                key={x.id}
                id={x.id}
                imgSRC={x.imgSRC}
                title={x.title}
                value={x.value}
              />
            ))}
          </BodyList>
        </Section>
      </Body>
    </Container>
  );
};

export default Home;
