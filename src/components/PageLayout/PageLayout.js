import * as React from "react";
import { IntlProvider } from "react-intl";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { menu } from '../../constant/menu';
import Header from '../Header/Header';
import SubTitle from '../SubTitle/SubTitle';
import Footer from '../Footer/Footer';
import Language from '../Language/Language';
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

const PageLayout = ({ pageTitle, children, type, pageContext }) => {
  const isHome = pageTitle === 'Home';
  return (
    <IntlProvider
      locale={pageContext.language}
      messages={pageContext.messages}
    >
      <main>
        <title>
          {isHome ?
            <Language id="jungwon_electronics" />
            : (
              <>
                <Language id="jungwon_electronics" />
                {' > '}
                <Language id={pageTitle} />
              </>
            )
          }
        </title>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Header menu={menu} isHome={isHome} />
            <PageStyled type={type}>
              {!isHome && <SubTitle pageTitle={pageTitle} menu={menu} />}
              {children}
            </PageStyled>
            <Footer type={type} />
          </Wrapper>
        </ThemeProvider>
      </main>
    </IntlProvider>
  );
}

export default PageLayout;