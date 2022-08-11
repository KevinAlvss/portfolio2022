import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin: 0 auto;

  padding: 0px 50px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 40px 0;
`;

export const ExperiencesBox = styled.div`
  display: flex;
  gap: 50px;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ExperienceTitle = styled.h3`
  text-transform: uppercase;
`;

export const ExperienceInterprise = styled.h2`
  color: #00d2df;
`;

export const ExperienceDescription = styled.p`
  color: #c4c4c4;
`;
