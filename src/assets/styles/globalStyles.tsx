import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Avenir', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
`;
