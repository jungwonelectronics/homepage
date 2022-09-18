import * as React from 'react';
import { navigate } from 'gatsby';
import IconButton from '../meterial/IconButton';
import Language from '../Language/Language';
import {
  WrapperStyled, NaviWrapperStyled, SpanStyled
} from './SubTitleStyled';

const getMenu = (path, menu) => {
  const menuLangKeys = [];
  if (path) {
    const [parent, child] = path.split('/').splice(1, 3);
    const parentMenu = menu.find(menuItem => menuItem.id === parent);
    if (parentMenu) {
      menuLangKeys.push(parentMenu.langKey);
      if (child) {
        const childMenu = parentMenu.childs.find(menuItem => menuItem.id.split('_')[1] === child);
        menuLangKeys.push(childMenu.langKey);
      }
    }
  }
  return menuLangKeys;
}

const SubTitle = ({ pageTitle, menu }) => {
  const menuLangKeys = getMenu(typeof window !== 'undefined' ? window.location.pathname : '', menu);
  return (
    <WrapperStyled>
      <h2><Language langKey={pageTitle} /></h2>
      <NaviWrapperStyled>
        <IconButton
          name="home"
          color="#555"
          onClick={() => { navigate('/') }}
        />
        {menuLangKeys.map((langKey, index) => (
          <React.Fragment key={langKey}>
            <SpanStyled isFirst={index === 0}>
              {'/'}
            </SpanStyled>
            <Language langKey={langKey} />
          </React.Fragment>
        ))}
      </NaviWrapperStyled>
    </WrapperStyled>
  );
}

export default SubTitle;