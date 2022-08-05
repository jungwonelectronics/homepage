import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';

const IntroductionPage = () => {
  const title = 'Company > Introduction';
  return (
    <PageLayout pageTitle={title}>
      <h1>{title}</h1>
    </PageLayout>
  );
}

export default IntroductionPage;
