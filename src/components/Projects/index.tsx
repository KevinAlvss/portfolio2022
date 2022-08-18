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
        <Title data-aos="fade-down" data-aos-delay="300">
          Projetos
        </Title>
        <ProjectsBox>
          <Project data-aos="fade-down" data-aos-delay="600">
            <ProjectTitle>Password Generator</ProjectTitle>
            <ProjectDescription>
              Gerador de senhas interativo
            </ProjectDescription>
            <ProjectLink
              href="https://strongpasswordgenerator.vercel.app/"
              target={"_blank"}
            >
              Vizualizar projeto
            </ProjectLink>
          </Project>
          <Project data-aos="fade-down" data-aos-delay="800">
            <ProjectTitle>Banco inter</ProjectTitle>
            <ProjectDescription>
              Estudo de animações e redesign do Banco Inter
            </ProjectDescription>
            <ProjectLink
              href="https://banco-inter-redesign-clone.vercel.app/"
              target={"_blank"}
            >
              Vizualizar projeto
            </ProjectLink>
          </Project>
          <Project data-aos="fade-down" data-aos-delay="1000">
            <ProjectTitle>LinkedIn Feed</ProjectTitle>
            <ProjectDescription>
              Clone da interface do feed do nosso querido LinkedIn
            </ProjectDescription>
            <ProjectLink
              href="https://linkedin-homepage.vercel.app/"
              target={"_blank"}
            >
              Vizualizar projeto
            </ProjectLink>
          </Project>
        </ProjectsBox>
      </Content>
    </Container>
  );
}
