import {
  Container,
  Content,
  PresentationSection,
  Text,
  NameTitle,
  LinkBox,
  Border,
  LinkedInLink,
  GitHubLink,
} from "./styles";

export function Presentation() {
  return (
    <Container>
      <Content>
        <PresentationSection>
          <Text>Olá, eu sou</Text>
          <NameTitle>Kevin Alves</NameTitle>
          <Text>Desenvolvedor Fullstack</Text>

          <LinkBox>
            <Border>
              <LinkedInLink
                href="https://www.linkedin.com/in/kevin-alves-pereira/"
                target={"_blank"}
              >
                LinkedIn
              </LinkedInLink>
            </Border>
            <Border>
              <GitHubLink
                href="https://github.com/KevinAlvss"
                target={"_blank"}
              >
                GitHub
              </GitHubLink>
            </Border>
          </LinkBox>
        </PresentationSection>
      </Content>
    </Container>
  );
}
