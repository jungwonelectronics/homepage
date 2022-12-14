import * as React from "react";
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../components/PageLayout/PageLayout';
import LinkCard from '../components/LinkCard/LinkCard';
import Ideology from '../components/Ideology/Ideology';

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

const HandShakeImageWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin-top: 60px;
  width: 90%;
  @media (max-width: 768px) {
    margin-top: 20px;
  } 
`;

const HandShakeTitle = styled.div`
  position: absolute;
  color: #fff;
  z-index: 1;
  bottom: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
  } 
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
      <LinkCard
        data={[
          { icon: 'factory', title: '사업 소개', link: '/company/introduction' },
          { icon: 'timeline', title: '연혁', link: '/company/history' },
          { icon: 'list', title: '제품 소개', link: '/product/carrier' },
          { icon: 'map', title: '오시는 길', link: '/contact' },
        ]}
      />
      <Ideology
        data={[
          { icon: 'manufacture', title: '기술', subTitle: '최고의 기술 기반' },
          { icon: 'handShake', title: '고객', subTitle: '최상의 제품과 서비스를 통한 고객 감동' },
          { icon: 'eco', title: '환경', subTitle: '환경을 생각하는 경영' },
        ]}
      />
      <HandShakeImageWrapper>
        <HandShakeTitle>"항상 더 나은 품질을 위해 노력하겠습니다."</HandShakeTitle>
        <StaticImage
          alt="picture 3"
          src="../images/hand-shake.jpg"
        />
      </HandShakeImageWrapper>
    </PageLayout>
  );
}

export default IndexPage;
