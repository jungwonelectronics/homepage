import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  width: 100%;
  height: 70px;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    display: none;
  } 
`;

export const HideMenuStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
