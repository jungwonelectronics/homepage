import * as React from "react";
import { navigate } from "gatsby";
import { useTheme } from '@mui/material/styles';
import Icon from '../meterial/Icon';
import IconButton from '../meterial/IconButton';
import Select from '../meterial/Select';
import Menu from '../meterial/Menu';
import Drawer from '../meterial/Drawer';
import List from '../meterial/List';
import { LanguageContext } from '../../context/LanguageContext';
import { languageOptions } from '../../constant/language';
import Logo from '../../images/logo.png';
import {
  HeaderStyled, LogoWrapperStyled, LogoStyled, LanguageWrapperStyled,
  NavStyled, MenuStyled, MenuItemStyled, HideMenuStyled,
} from './HeaderStyled';


export default function Header({ menu }) {
  const { lang, language, onChangeLanguage } = React.useContext(LanguageContext);
  const theme = useTheme();
  return (
    <HeaderStyled>
      <LogoWrapperStyled>
        <LogoStyled
          onClick={() => { navigate('/') }}
        >
          <img src={Logo} alt="Logo" height="60px" />
        </LogoStyled>
      </LogoWrapperStyled>
      <NavStyled>
        <MenuStyled>
          {menu.map(item => (
            <MenuItemStyled
              key={item.langKey}
              theme={theme}
              onClick={() => { navigate(`/${item.id}`) }}
            >
              {lang[item.langKey]}
            </MenuItemStyled>
          ))}
        </MenuStyled>
      </NavStyled>
      <LanguageWrapperStyled>
        <Icon name="language" color="#555" sx={{ marginRight: '10px' }} />
        <Select
          value={language}
          options={languageOptions}
          onChange={e => onChangeLanguage(e.target.value)}
          sx={{ minWidth: '101px' }}
        />
      </LanguageWrapperStyled>
      <HideMenuStyled>
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
          <List
            sx={{ width: '250px' }}
            list={menu}
            lang={lang}
          />
        </Drawer>
      </HideMenuStyled>
    </HeaderStyled>
  );
}