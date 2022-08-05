import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';

const CatridgePage = () => {
  const title = 'Company > Catridge';
  return (
    <PageLayout pageTitle={title}>
      <h1>{title}</h1>
    </PageLayout>
  );
}

export default CatridgePage;
