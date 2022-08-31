import * as React from 'react';
import {
  FooterStyled, WrapperStyled, LinkWrapperStyled, LinkStyled, ContactStyled, CopyrightStyled
} from './FooterStyled';

export default function Footer() {
  return (
    <FooterStyled>
      <WrapperStyled>
        <LinkWrapperStyled>
          <LinkStyled>찾아오는 길</LinkStyled>
          |<LinkStyled>사이트맵</LinkStyled>
        </LinkWrapperStyled>
        <ContactStyled>충청남도 아산시 둔포면 아산밸리동로 295, 3동 / 041)532-8752</ContactStyled>
        <CopyrightStyled>Copyright 2022 Jungwon Electronics co.,Ltd. All rights reserved.</CopyrightStyled>
      </WrapperStyled>
    </FooterStyled>
  );
}