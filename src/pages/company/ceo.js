import * as React from "react";
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import PageLayout from '../../components/PageLayout/PageLayout';
import Paragraph from '../../components/Paragraph/Paragraph';

const TitleArea = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;

const Title = styled.p`
  @media (max-width: 425px) {
    width: 225px;
  }
`;

const SubTitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 15px;
`;

const CardArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  background-color: #f2f2f2;
  height: 200px;
  margin: 0 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  font-weight: 600;
  font-size: 15px;
  @media (max-width: 768px) {
    flex: initial;
    margin: 10px;
    width: 40%;
    font-size: 16px;
  }
  @media (max-width: 425px) {
    width: 95%;
    font-size: 17px;
  }
`;


const CEOPage = () => {
  const theme = useTheme();
  return (
    <PageLayout pageTitle='CEOGreetings'>
      <TitleArea theme={theme}>
        <Title>원칙을 바로 세우며 발전하는 기업, 정원전자 입니다.</Title>
      </TitleArea>
      <Paragraph sentences={[
        '안녕하십니까?',
        '정원전자는 최고의 기술을 기반으로 최상의 제품과 서비스를 추구하고 있으며, 아울러 환경을 생각하는 경영을 지향하고 있습니다.',
        '아직 작지만 강한 회사, 전 세계의 고객이 믿고 찾는 제품을 개발 생산하여 한발 한발 전진하는 회사를 만들기 위하여 노력하고 있는 회사입니다.',
        '항상 보내주시는 신뢰와 성원에 감사드리며 보답하고자 노력하겠습니다.',
        '변함없는 애정으로 지켜봐 주시기 바랍니다.',
        '감사합니다.',
      ]} />
      <SubTitleArea>
        <p>주요 사업</p>
      </SubTitleArea>
      <CardArea>
        <Card>프린터, 복사기용 캐리어, 현상제 제조 판매</Card>
        <Card>재제조 토너 카트리지 생산 판매</Card>
        <Card>재제조 PCU 생산 판매</Card>
        <Card>프린터, 복사기 A/S용 부품 판매</Card>
      </CardArea>
    </PageLayout>
  );
}

export default CEOPage;
