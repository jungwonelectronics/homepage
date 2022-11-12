import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import CarrierTable from '../../components/table/CarrierTable';

const CarrierPage = () => {
  return (
    <PageLayout pageTitle="carrierAndDeveloper" widthAuto>
      <CarrierTable />
    </PageLayout>
  );
}

export default CarrierPage;
