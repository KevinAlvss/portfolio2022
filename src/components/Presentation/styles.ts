import styled from "styled-components";
import polygon from "../../assets/polygon.svg";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;

  padding: 0 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url(${polygon});
  background-repeat: no-repeat;
  background-position: right;
`;

export const PresentationSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 24px;
`;

export const NameTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  text-transform: uppercase;
  margin: 10px 0;

  color: #00d2df;
`;

export const LinkBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

export const Border = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 17px 2px;
  position: relative;
  border-radius: 2px;
  background: linear-gradient(to right, #9358f7, #10d7e2);
`;

export const LinkedInLink = styled.a`
  background-color: #121212;
  padding: 15px 50px;
`;
export const GitHubLink = styled.a`
  background-color: #121212;
  padding: 15px 50px;
`;
