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
  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={delevoper} alt="dev" />
        </ImageContainer>
        <TextContainer>
          <Title>Sobre mim</Title>
          <Location>São Paulo, Brasil</Location>
          <Text>
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
