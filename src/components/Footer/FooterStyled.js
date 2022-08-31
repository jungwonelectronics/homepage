import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: #343a40;
  height: 100px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
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