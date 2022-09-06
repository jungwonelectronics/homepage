import * as React from "react";
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import PageLayout from '../../components/PageLayout/PageLayout';

const TitleArea = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 578px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

const Title = styled.p`
  @media (max-width: 381px) {
    width: 225px;
  }
`;

const ParagraphArea = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paragraph = styled.div`
  width: 1060px;
  font-size: 18px;
  line-height: 2;
  @media (max-width: 1189px) {
    width: 756px;
  }
  @media (max-width: 800px) {
    width: 536px;
  }
  @media (max-width: 578px) {
    width: 100%;
    font-size: 16px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const CEOPage = () => {
  const theme = useTheme();
  return (
    <PageLayout pageTitle='CEOGreetings'>
      <TitleArea theme={theme}>
        <Title>원칙을 세우며 발전해나가는 기업, 정원전자 입니다.</Title>
      </TitleArea>
      <ParagraphArea>
        <Paragraph>
            안녕하십니까?
            <br />
            정원전자는 최고의 기술을 기반으로 최상의 제품과 서비스를 추구하고 있으며, 아울러 환경을 생각하는 경영을 지향하고 있습니다.
            <br />
            아직 작지만 강한 회사, 전세계의 고객이 믿고 찾는 제품을 개발 생산하여 한발 한발 전진하는 회사를 만들기 위하여 노력하고 있는 회사입니다.
            <br />
            항상 보내주시는 신뢰와 성원에 감사드리며 보답하고자 노력하겠습니다.
            <br />
            변함없는 애정으로 지켜봐 주시기 바랍니다.
        </Paragraph>
      </ParagraphArea>
    </PageLayout>
  );
}

export default CEOPage;
