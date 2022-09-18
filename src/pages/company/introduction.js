import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import Paragraph from '../../components/Paragraph/Paragraph';

const IntroductionPage = () => {
  return (
    <PageLayout pageTitle="introduction">
      <div>
        <Paragraph sentences={[
          '신뢰와 기술력을 바탕으로 고객과 소통하는 기업 ㈜정원전자는 2011년 설립한 재제조 및 수출 중심의 제조회사로 사무용 복합기 및 PCU 등의 소모품을 생산 판매하는 전문 업체입니다. 특히, 주요 핵심 소재인 캐리어 및 현상제를 생산 OEM 공급하는 공장을 신도리코의 기술 지원 아래 진행하고 있습니다. 글로벌 리더 기업인 신도리코의 부분별 품목을 수출대행업체로써, 리코, 코니카미놀타의 정품 및 재제조 제품을 전 세계에 수출하며 그 역량을 넓혀가고 있습니다.',
        ]} />
      </div>
    </PageLayout>
  );
}

export default IntroductionPage;
