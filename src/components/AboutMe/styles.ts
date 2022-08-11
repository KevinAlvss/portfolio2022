import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  width: 100%;
  background-color: #151515;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;

  padding: 0px 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 50%;

  > img {
    width: 80%;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Location = styled.h3`
  font-weight: 500;
  margin: 40px 0 21px 0;
`;

export const Text = styled.p`
  color: #c4c4c4;
`;
