import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled, { createGlobalStyle } from "styled-components";
import { LanguageProvider } from '../../context/LanguageContext';
import { menu } from '../../constant/menu';
import Header from '../Header/Header';

const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans KR", sans-serif'],
  },
  palette: {
    primary: {
      main: '#364A9C',
      contrastText: '#fff',
    },
  },
});

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const PageStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLayout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{`Jungwon Electronics > ${pageTitle}`}</title>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <GlobalStyle />
          <Wrapper>
            <Header menu={menu} />
            <PageStyled>{children}</PageStyled>
          </Wrapper>
        </LanguageProvider>
      </ThemeProvider>
    </main>
  );
}

export default PageLayout;