import Aos from "aos";
import { useEffect } from "react";

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
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Container>
      <Content>
        <PresentationSection>
          <Text data-aos="fade-down" data-aos-delay="300">
            Olá, eu sou
          </Text>
          <NameTitle data-aos="fade-down" data-aos-delay="600">
            Kevin Alves
          </NameTitle>
          <Text data-aos="fade-down" data-aos-delay="900">
            Desenvolvedor Fullstack
          </Text>

          <LinkBox>
            <Border data-aos="fade-down" data-aos-delay="900">
              <LinkedInLink
                href="https://www.linkedin.com/in/kevin-alves-pereira/"
                target={"_blank"}
                data-aos="fade-down"
                data-aos-delay="900"
              >
                LinkedIn
              </LinkedInLink>
            </Border>
            <Border data-aos="fade-down" data-aos-delay="1000">
              <GitHubLink
                href="https://github.com/KevinAlvss"
                target={"_blank"}
                data-aos="fade-down"
                data-aos-delay="1000"
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
