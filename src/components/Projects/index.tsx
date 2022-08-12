import {
  Container,
  Content,
  Title,
  ProjectsBox,
  Project,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
} from "./styles";

export function Projects() {
  return (
    <Container>
      <Content>
        <Title>Projetos</Title>
        <ProjectsBox>
          <Project>
            <ProjectTitle>Em breve</ProjectTitle>
            <ProjectDescription>
              Pegue o café e espere um pouco, estou desenvolvendo o projeto.
            </ProjectDescription>
            <ProjectLink>Vizualizar projeto</ProjectLink>
          </Project>
          <Project>
            <ProjectTitle>Em breve</ProjectTitle>
            <ProjectDescription>
              Pegue o café e espere um pouco, estou desenvolvendo o projeto.
            </ProjectDescription>
            <ProjectLink>Vizualizar projeto</ProjectLink>
          </Project>
          <Project>
            <ProjectTitle>Em breve</ProjectTitle>
            <ProjectDescription>
              Pegue o café e espere um pouco, estou desenvolvendo o projeto.
            </ProjectDescription>
            <ProjectLink>Vizualizar projeto</ProjectLink>
          </Project>
        </ProjectsBox>
      </Content>
    </Container>
  );
}
