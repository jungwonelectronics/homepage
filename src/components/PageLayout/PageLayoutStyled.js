import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
`;

export const PageStyled = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  flex-direction: column;
  position: relative;
  padding: 30px 20px;
  align-items: center;
`;
