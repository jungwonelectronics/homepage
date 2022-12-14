import * as React from 'react';
import { navigate } from 'gatsby';
import IconButton from '../meterial/IconButton';
import Menu from '../meterial/Menu';
import Language from '../Language/Language';
import { LanguageContext } from '../../context/LanguageContext';
import {
  WrapperStyled, NaviWrapperStyled, SpanStyled, MenuItemStyled
} from './SubTitleStyled';

const getMenu = (path, menu) => {
  const currentMenu = [];
  if (path) {
    const [parent, child] = path.split('/').splice(1, 3);
    const parentMenu = menu.find(menuItem => menuItem.id === parent);
    if (parentMenu) {
      if (parentMenu.childs) {
        currentMenu.push({
          ...parentMenu,
          childs: parentMenu.childs.filter(menuItem => menuItem.id.split('_')[1] !== child),
        });
      } else {
        currentMenu.push(parentMenu);
      }
      if (child) {
        const childMenu = parentMenu.childs.find(menuItem => menuItem.id.split('_')[1] === child);
        currentMenu.push(childMenu);
      }
    }
  }
  return currentMenu;
}

const SubTitle = ({ pageTitle, menu }) => {
  const { lang } = React.useContext(LanguageContext);
  const currentMenu = getMenu(typeof window !== 'undefined' ? window.location.pathname : '', menu);
  return (
    <WrapperStyled>
      <h2><Language langKey={pageTitle} /></h2>
      <NaviWrapperStyled>
        <IconButton
          name="home"
          color="#555"
          onClick={() => { navigate('/') }}
        />
        {currentMenu.map((menu, index) => (
          <React.Fragment key={menu.id}>
            <SpanStyled isFirst={index === 0}>
              {'/'}
            </SpanStyled>
            {(currentMenu.length === 1 || index === 0) ? (
              <Language langKey={menu.langKey} />
            ) : (
              <Menu
                id="navigaton-menu"
                Button={(
                  <MenuItemStyled>
                    <Language langKey={menu.langKey} />
                  </MenuItemStyled>
                )}
                menus={currentMenu[0].childs.map(childItem => ({ ...childItem, label: lang[childItem.langKey] }))}
                onClick={id => navigate(`/${id.replace('_', '/')}`)}
              />
            )}
          </React.Fragment>
        ))}
      </NaviWrapperStyled>
    </WrapperStyled>
  );
}

export default SubTitle;