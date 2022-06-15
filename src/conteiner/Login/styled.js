import styled from "styled-components";
export const LoginWrapper = styled.div`
  background: ${({ color }) => color};
`;

export const Conteiner = styled.div`
  position: relative;
  top: 35px;
  margin: auto;
  height: 500px;
  width: 500px;
  background-color: #00000026;
  box-shadow: 0px 2px 10px -1px black;
  border-radius: 30px;
`;

export const InputPanel = styled.div`
  position: relative;
  top: 100px;
  width: 200px;
  height: 300px;
  font-size: 20px;
  margin-left: 150px;
`;
