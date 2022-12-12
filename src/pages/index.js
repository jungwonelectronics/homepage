import * as React from "react";
import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import Summary from '../components/Summary/Summary';

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
`;

const BGImage = styled.div`
  background-image: url(/images/main.jpg);
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
`;

const TitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: #fff;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  @media (min-width: 1280px) {
    right: 8%;
  }
`

const Title = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-size: 18px;
`;

const IndexPage = () => {
  return (
    <PageLayout pageTitle="Home" type="Main">
      <ImageWrapper>
        <BGImage />
        <TitleWrapper>
          <SubTitle>원칙을 바로 세우며 발전하는 기업</SubTitle>
          <Title>정원전자</Title>
        </TitleWrapper>
      </ImageWrapper>
      <Summary
        data={[
          { icon: 'manufacture', title: '사업 소개' },
          { icon: 'timeline', title: '연혁' },
          { icon: 'list', title: '제품 소개' },
          { icon: 'map', title: '찾아오는 길' },
        ]}
      />
    </PageLayout>
  );
}

export default IndexPage;
