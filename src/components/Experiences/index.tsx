import {
  Container,
  Content,
  Title,
  ExperiencesBox,
  Experience,
  ExperienceTitle,
  ExperienceInterprise,
  ExperienceDescription,
} from "./styles";

export function Experiences() {
  return (
    <Container>
      <Content>
        <Title>Experiencias</Title>
        <ExperiencesBox>
          <Experience>
            <ExperienceTitle>Desenvolvedor Fullstack Junior</ExperienceTitle>
            <ExperienceInterprise>ZAK</ExperienceInterprise>
            <ExperienceDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </ExperienceDescription>
          </Experience>
          <Experience>
            <ExperienceTitle>
              Estágiario em engenharia de software
            </ExperienceTitle>
            <ExperienceInterprise>PWI</ExperienceInterprise>
            <ExperienceDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </ExperienceDescription>
          </Experience>
        </ExperiencesBox>
      </Content>
    </Container>
  );
}
