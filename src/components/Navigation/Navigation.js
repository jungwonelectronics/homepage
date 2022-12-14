import * as React from "react";
import { navigate } from 'gatsby';
import { useTheme } from '@mui/material/styles';
import Menu from '../meterial/Menu';
import { LanguageContext } from '../../context/LanguageContext';
import {
  NavStyled, NavMenuStyled, NavMenuItemStyled,
} from './NavigationStyled';

const Navigation = ({ menu }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentMenu = currentPath.split('/').splice(1, 2).join('_');
  const theme = useTheme();
  const { lang } = React.useContext(LanguageContext);
  return (
    <NavStyled>
        <NavMenuStyled>
          {menu.map(item => item.childs ? (
            <Menu
              key={item.id}
              id="submenu-select"
              Button={(
                <NavMenuItemStyled theme={theme}>
                  {lang[item.langKey]}
                </NavMenuItemStyled>
              )}
              value={currentMenu}
              menus={item.childs.map(childItem => ({ ...childItem, label: lang[childItem.langKey] }))}
              onClick={id => navigate(`/${id.replace('_', '/')}`)}
              useHover
            />
          ) : (
            <NavMenuItemStyled
              key={item.id}
              theme={theme}
              onClick={() => { navigate(`/${item.id}`) }}
            >
              {lang[item.langKey]}
            </NavMenuItemStyled>
          ))}
        </NavMenuStyled>
      </NavStyled>
  );
};

export default Navigation;