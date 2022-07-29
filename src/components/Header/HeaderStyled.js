import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  border-bottom: 1px solid #d2d2d2;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 7%);
  flex-basis: 70px;
  @media (max-width: 767px) {
    justify-content: space-between;
    padding: 0 20px 0 40px;
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

export const NavStyled = styled.nav`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    display: none;
  } 
`;

export const MenuStyled = styled.ul`
  flex: 1;
  display: flex;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const MenuItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 16px;
  color: #555;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  transition: color .3s;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
    transition: width .3s;
  }
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    &::after {
      width: 100%;
    }
  }
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
