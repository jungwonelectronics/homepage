import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LanguageProvider, LanguageContext } from '../../context/LanguageContext';
import { menu } from '../../constant/menu';
import Header from '../Header/Header';
import SubTitle from '../SubTitle/SubTitle';
import Footer from '../Footer/Footer';
import {
  GlobalStyle, Wrapper, PageStyled
} from './PageLayoutStyled';

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

const PageLayout = ({ pageTitle, children }) => {
  const { lang } = React.useContext(LanguageContext);
  return (
    <main>
      <title>{`정원전자 > ${lang[pageTitle]}`}</title>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <GlobalStyle />
          <Wrapper>
            <Header menu={menu} />
            <SubTitle pageTitle={pageTitle} menu={menu} />
            <PageStyled>{children}</PageStyled>
            <Footer />
          </Wrapper>
        </LanguageProvider>
      </ThemeProvider>
    </main>
  );
}

export default PageLayout;