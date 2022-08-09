import { Container, Content, Title, MenuOptions, Option } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Title>Portfólio</Title>
        <MenuOptions>
          <Option>Home</Option>
          <Option>Sobre mim</Option>
          <Option>Experiência</Option>
          <Option>Projetos</Option>
        </MenuOptions>
      </Content>
    </Container>
  );
}
