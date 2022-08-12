import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
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

export const InterpriseBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InterpriseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #c4c4c4;
  width: 200px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  border-left: 2px solid #151515;

  &:hover {
    background-color: #151515;
    border-left: 2px solid #00d2df;
  }
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
