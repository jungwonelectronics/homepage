import styled from 'styled-components';

export const FooterStyled = styled.footer`
  height: 116px;
  width: 100%;
  background-color: #343a40;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    line-height: 18px;
  }
`;

export const WrapperStyled = styled.div`
  font-size: 14px;
  padding: 20px;
  width: 1060px;
  @media (max-width: 1280px) {
    width: 860px;
  }
  @media (max-width: 1024px) {
    width: 625px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

export const LinkWrapperStyled = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  display: flex;
  color: #999;
  @media (max-width: 425px) {
    margin-bottom: 5px;
  }
`;

export const LinkStyled = styled.p`
  margin: 0;
  color: #999;
  margin: 0 10px;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const CopyrightStyled = styled.p`
  margin: 0;
  color: #999;
`;

export const ContactStyled = styled.p`
  margin: 0;
  color: #fff;
  a {
    color: #fff;
  }
`;