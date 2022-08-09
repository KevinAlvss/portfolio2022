import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
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
`;

export const Title = styled.h2`
  color: #00d2df;
  font-weight: 500;
  font-size: 24px;
`;

export const MenuOptions = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
`;

export const Option = styled.li`
  color: #c4c4c4;
  font-size: 18px;
  cursor: pointer;
`;
