import styled from 'styled-components';

export const FooterStyled = styled.footer`
  flex-basis: 100px;
  flex-shrink: 0;
  background-color: #343a40;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    line-height: 18px;
  }
`;

export const WrapperStyled = styled.div`
  width: 420px;
  font-size: 14px;
  @media (max-width: 420px) {
    width: 300px;
    font-size: 10px;
  }
`;

export const LinkWrapperStyled = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  display: flex;
  color: #999;
  @media (max-width: 420px) {
    font-size: 12px;
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
`;