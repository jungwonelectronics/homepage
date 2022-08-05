import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';

const CarrierPage = () => {
  const title = 'Company > Carrier';
  return (
    <PageLayout pageTitle={title}>
      <h1>{title}</h1>
    </PageLayout>
  );
}

export default CarrierPage;
