import * as React from "react";
// import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import { StaticImage } from 'gatsby-plugin-image';
import PageLayout from '../../components/PageLayout/PageLayout';
import Paragraph from '../../components/Paragraph/Paragraph';
import ProductIntroduction from '../../components/ProductIntroduction/ProductIntroduction';

const IntroductionPage = () => {
  const theme = useTheme();
  return (
    <PageLayout pageTitle="introduction">
      <div>
        <Paragraph sentences={[
          '신뢰와 기술력을 바탕으로 고객과 소통하는 기업 ㈜정원전자는 2011년 설립한 재제조 및 수출 중심의 제조회사로 사무용 복합기 및 PCU 등의 소모품을 생산 판매하는 전문 업체입니다. 특히, 주요 핵심 소재인 캐리어 및 현상제를 생산 OEM 공급하는 공장을 신도리코의 기술 지원 아래 진행하고 있습니다. 글로벌 리더 기업인 신도리코의 부분별 품목을 수출대행업체로써, 리코, 코니카미놀타의 정품 및 재제조 제품을 전 세계에 수출하며 그 역량을 넓혀가고 있습니다.',
        ]} />
      </div>
      <ProductIntroduction
        title="첫째, 복사기 프린터용 현상제, 캐리어 생산 공급"
        introduction="- 신도리코와 협력하여 현상제 및 캐리어 생산설비 이관, OEM 생산 및 공급 계약 체결하여 아산 둔포 공장 신설 및 본사 이전을 완료하고 주요 제품 생산을 개시하였습니다."
        images={[
          (<StaticImage
            alt="picture 1"
            src="../../images/introduction1.png"
          />), (<StaticImage
            alt="picture 2"
            src="../../images/introduction2.png"
          />), (<StaticImage
            alt="picture 3"
            src="../../images/introduction3.png"
          />),
        ]}
      />
      <ProductIntroduction
        title="둘째, PCU (Photo Conductor Unit)"
        introduction="- 리코 Aficio 정품 PCU 및 재제조 PCU를 생산 수출합니다."
        images={[
          (<StaticImage
            alt="picture 4"
            src="../../images/introduction4.png"
          />), (<StaticImage
            alt="picture 5"
            src="../../images/introduction5.png"
          />), (<StaticImage
            alt="picture 6"
            src="../../images/introduction6.png"
          />),
        ]}
      />
      <ProductIntroduction
        title="셋째, 코니카 미놀타용 재제조 PCU 및 재제조 유니트"
        introduction="- 코니카 미놀타 복합기용 전사 벨트 유닛, 드럼 유닛, 정착 유닛, 토너 카트리지, 현상 유닛, 토너, 롤러, 슬리브 등 각종 재제조 유닛을 제조 판매합니다."
        images={[
          (<StaticImage
            alt="picture 7"
            src="../../images/introduction7.png"
          />), (<StaticImage
            alt="picture 8"
            src="../../images/introduction8.png"
          />), (<StaticImage
            alt="picture 9"
            src="../../images/introduction9.png"
          />),
        ]}
      />
      <div style={{ width: '100%' }}>
        <p>항상  더 나은 품질을 고객에게 약속드리기 위해 끊임없이 기술 개발과 품질 관리를 위해 노력하고 있는 ㈜정원전자입니다.</p>
      </div>
    </PageLayout>
  );
}

export default IntroductionPage;
