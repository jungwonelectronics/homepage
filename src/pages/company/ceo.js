import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';

const CEOPage = () => {
  const title = 'Company > CEO';
  return (
    <PageLayout pageTitle={title}>
      <h1>{title}</h1>
    </PageLayout>
  );
}

export default CEOPage;
