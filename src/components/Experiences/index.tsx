import { useEffect, useState } from "react";
import {
  Container,
  Content,
  Title,
  ExperiencesBox,
  Experience,
  InterpriseBox,
  InterpriseButton,
  ExperienceTitle,
  ExperienceInterprise,
  ExperienceDescription,
} from "./styles";

export function Experiences() {
  const [experienceTitle, setExperienceTitle] = useState("");
  const [experienceInterprise, setExperienceInterprise] = useState("");
  const [experienceDescription, setExperienceDescription] = useState("");

  function handleExperience(interprise: string) {
    switch (interprise) {
      case "zak":
        setExperienceTitle("Desenvolvedor Fullstack Junior");
        setExperienceInterprise(interprise.toUpperCase());
        setExperienceDescription(
          "Na Zak eu trabalhei desenvolvendo novas features em diversas tecnologias, trazendo mais valor para nossa solução de replicação de dados na nuvem, e vizualização da saúde de servidores locais. Tecnologias utilizadas: ReactJs, Typescript, Styled-components, NodeJS e Kafka"
        );
        break;
      case "pwi":
        setExperienceTitle("Estágiario em engenharia de software");
        setExperienceInterprise(interprise.toUpperCase());
        setExperienceDescription(
          "Desenvolvimentos de novas features para um ERP utilizado por laboratórios opticos, usando tecnologias como: React Native, JavaScript, SQL Server, C#, HTML, CSS"
        );
        break;
    }
  }

  useEffect(() => {
    handleExperience("zak");
  }, []);

  return (
    <Container>
      <Content>
        <Title>Experiencias</Title>
        <ExperiencesBox>
          <Experience>
            <InterpriseBox>
              <InterpriseButton onClick={() => handleExperience("zak")}>
                ZAK
              </InterpriseButton>
              <InterpriseButton onClick={() => handleExperience("pwi")}>
                PWI
              </InterpriseButton>
            </InterpriseBox>
          </Experience>
          <Experience>
            <ExperienceTitle>{experienceTitle}</ExperienceTitle>
            <ExperienceInterprise>{experienceInterprise}</ExperienceInterprise>
            <ExperienceDescription>
              {experienceDescription}
            </ExperienceDescription>
          </Experience>
        </ExperiencesBox>
      </Content>
    </Container>
  );
}
