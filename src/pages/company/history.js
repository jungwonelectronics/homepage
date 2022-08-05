import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';

const HistoryPage = () => {
  const title = 'Company > History';
  return (
    <PageLayout pageTitle={title}>
      <h1>{title}</h1>
    </PageLayout>
  );
}

export default HistoryPage;
