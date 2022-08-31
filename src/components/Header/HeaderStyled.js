import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  /* border-bottom: 1px solid #d2d2d2;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 5%); */
  flex-basis: 70px;
  flex-shrink: 0;
  @media (max-width: 767px) {
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }
`;

export const LogoWrapperStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex: initial;
  } 
`;

export const LogoStyled = styled.div`
  display: flex;
  cursor: pointer;
`;

export const LanguageWrapperStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  } 
`;

export const HideMenuStyled = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
`;
