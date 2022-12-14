import * as React from 'react';
import { navigate } from 'gatsby';
import Icon from '../meterial/Icon';
import IconButton from '../meterial/IconButton';
import Select from '../meterial/Select';
import Menu from '../meterial/Menu';
import Drawer from '../meterial/Drawer';
import List from '../meterial/List';
import Navigation from '../Navigation/Navigation';
import { LanguageContext } from '../../context/LanguageContext';
import { languageOptions } from '../../constant/language';
import Logo from '../../images/logo.png';
import {
  HeaderStyled, LogoWrapperStyled, LogoStyled, LanguageWrapperStyled, HideMenuStyled,
  BackspaceIconWrapper, TopStyled,
} from './HeaderStyled';


export default function Header({ menu, isHome }) {
  const { lang, language, onChangeLanguage } = React.useContext(LanguageContext);
  return (
    <HeaderStyled>
      <LogoWrapperStyled>
        <LogoStyled
          onClick={() => { navigate('/') }}
        >
          <img src={Logo} alt="Logo" height="60px" />
        </LogoStyled>
      </LogoWrapperStyled>
      <Navigation menu={menu} />
      <LanguageWrapperStyled>
        <Icon name="language" color="#555" sx={{ marginRight: '10px' }} />
        <Select
          value={language}
          options={languageOptions}
          onChange={e => onChangeLanguage(e.target.value)}
          sx={{ minWidth: '101px' }}
        />
      </LanguageWrapperStyled>
      <BackspaceIconWrapper isHome={isHome}>
        <IconButton name="backspace" color="#555" onClick={() => navigate(-1)} />
      </BackspaceIconWrapper>
      <HideMenuStyled isHome={isHome}>
        <Menu
          id="language-select"
          Button={<IconButton name="language" color="#555" />}
          value={language}
          menus={languageOptions}
          onClick={onChangeLanguage}
        />
        <Drawer
          anchor="right"
          Button={<IconButton name="menu" color="#555" />}
        >
          <>
            <TopStyled>
              <LogoStyled
                onClick={() => { navigate('/') }}
              >
                <img src={Logo} alt="Logo" width="120px" />
              </LogoStyled>
              <Menu
                id="mobile-language-select"
                Button={(
                  <IconButton name="language" color="#555" />
                )}
                value={language}
                menus={languageOptions}
                onClick={id => onChangeLanguage(id)}
              />
            </TopStyled>
            <List
              sx={{ width: '250px' }}
              list={menu}
              lang={lang}
              onClickListItem={id => navigate(`/${id.replace('_', '/')}`)}
            />
          </>
        </Drawer>
      </HideMenuStyled>
    </HeaderStyled>
  );
}