import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';

const EtcPage = () => {
  const title = 'Company > Etc';
  return (
    <PageLayout pageTitle={title}>
      <h1>{title}</h1>
    </PageLayout>
  );
}

export default EtcPage;