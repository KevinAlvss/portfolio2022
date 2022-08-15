import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #151515;
  padding: 100px 0;
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

  @media (max-width: 990px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  width: 50%;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const Location = styled.h3`
  font-weight: 500;
  margin: 40px 0 21px 0;

  @media (max-width: 460px) {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  color: #c4c4c4;
  font-size: 18px;

  @media (max-width: 460px) {
    font-size: 14px;
  }
`;
