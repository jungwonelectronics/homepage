import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import CartridgeTable from '../../components/table/CartridgeTable';

const CartridgePage = () => {
  return (
    <PageLayout pageTitle="cartridge" type="Table">
      <CartridgeTable />
    </PageLayout>
  );
}

export default CartridgePage;
