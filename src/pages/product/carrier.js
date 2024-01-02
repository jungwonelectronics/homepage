import * as React from "react";
import { useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../../components/PageLayout/PageLayout';
import CarrierTable from '../../components/table/CarrierTable';
import CarrierTableByCode from '../../components/table/CarrierTableByCode';
import Select from '../../components/meterial/Select';

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
`;

const CarrierPage = ({ pageContext }) => {
  const [mode, setMode] = useState('code');
  const options = [
    { id: 'code', label: 'By Code' },
    { id: 'brand', label: 'By Brand' },
  ];
  const onChageOption = e => {
    const { value } = e.target;
    setMode(value);
  }
  return (
    <PageLayout pageTitle="carrier_developer" type="Table" pageContext={pageContext}>
      <SelectWrapper>
        <Select
          value={mode}
          options={options}
          onChange={onChageOption}
        />
      </SelectWrapper>
      {mode === 'code' ? <CarrierTableByCode /> : <CarrierTable />}
    </PageLayout>
  );
}

export default CarrierPage;
