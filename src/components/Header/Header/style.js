import styled from "styled-components";

export const MainHeader = styled.header`
  text-align: center;
  padding: 10px;
  box-shadow: rgb(204 204 204) 0px 2px 10px;
  height: 50px;
`;

export const MainHeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainHeaderLink = styled.a`
  transition: all 0.2s linear;
  border-bottom: 2px solid transparent;
  font-size: 18px;

  display: inline-block;
  margin: 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
