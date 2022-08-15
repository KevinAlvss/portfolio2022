import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  padding: 100px 50px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 40px;
`;

export const ProjectsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Project = styled.div`
  flex: 1;
  display: flex;
  height: 215px;
  flex-direction: column;
  justify-content: space-between;
  min-width: 400px;
  background-color: #2c2c2c;
  padding: 40px;
  gap: 20px;
  border: 2px solid transparent;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 2px solid #00d2df;
  }

  @media (max-width: 500px) {
    min-width: 100%;
    height: 250px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ProjectDescription = styled.p`
  color: #c4c4c4;
`;

export const ProjectLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
