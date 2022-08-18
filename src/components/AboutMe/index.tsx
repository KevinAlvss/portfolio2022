import { useEffect } from "react";
import Aos from "aos";

import {
  Container,
  Content,
  ImageContainer,
  TextContainer,
  Title,
  Location,
  Text,
} from "./styles";

import delevoper from "../../assets/developer.svg";

export function AboutMe() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Container>
      <Content>
        <ImageContainer>
          <img
            src={delevoper}
            alt="dev"
            data-aos="fade-down"
            data-aos-delay="300"
          />
        </ImageContainer>
        <TextContainer>
          <Title data-aos="fade-down" data-aos-delay="300">
            Sobre mim
          </Title>
          <Location data-aos="fade-down" data-aos-delay="400">
            São Paulo, Brasil
          </Location>
          <Text data-aos="fade-down" data-aos-delay="500">
            Olá! Muito prazer! Eu sou o Kevin, uma pessoa apaixonada por
            tecnologia, e por programação! Já trabalho com desenvolvimento
            fullstack há 1 ano e 5 meses, usando tecnologias como: ReactJs,
            Node, Typescript, MongoDb, Express e Kafka. adoro novos desafios e
            aprender coisas novas, me adapto muito bem com novas tecnologias e
            metas!
          </Text>
        </TextContainer>
      </Content>
    </Container>
  );
}
