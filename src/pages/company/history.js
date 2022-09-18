import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import Timeline from '../../components/meterial/Timeline';

const HistoryPage = () => {
  return (
    <PageLayout pageTitle="history">
      <div style={{ width: '100%' }}>
        <Timeline
          timelines={[
            { date: '2022.04', desc: '캐리어 국내 공급 개시' },
            { date: '2022.03', desc: '캐리어 OEM 납품 개시' },
            { date: '2022.01', desc: '캐리어 미국, 동남아 수출 개시' },
            { date: '2021.09', desc: '본사 이전(아산 둔포)' },
            { date: '2021.08', desc: '아산 둔포 공장 설립' },
            { date: '2021.07', desc: '신도리코 캐리어 설비 인수' },
            { date: '2015.03', desc: '현 대표이사 취임' },
            { date: '2012.12', desc: '백만불 수출탑 수상' },
            { date: '2011.01', descs: ['미국, 유럽및 동남아 수출 개시', '신도리코 대리점 협약', '㈜정원전자 설립(의정부 용현동)'] },
          ]}
        />
      </div>
    </PageLayout>
  );
}

export default HistoryPage;
