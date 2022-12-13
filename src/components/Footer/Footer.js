import * as React from 'react';
import {
  FooterStyled, WrapperStyled, NameStyled, ContactStyled, CopyrightStyled
} from './FooterStyled';

export default function Footer({ type }) {
  return (
    <FooterStyled>
      <WrapperStyled type={type}>
        <NameStyled>JUNGWON ELECTRONICS</NameStyled>
        <ContactStyled>충청남도 아산시 둔포면 아산밸리동로 295, 3동 / <a href="tel:041-532-8752">041-532-8752</a></ContactStyled>
        <CopyrightStyled>Copyright 2022 Jungwon Electronics co.,Ltd. All rights reserved.</CopyrightStyled>
      </WrapperStyled>
    </FooterStyled>
  );
}