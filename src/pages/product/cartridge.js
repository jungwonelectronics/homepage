import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import CartridgeTable from '../../components/table/CartridgeTable';

const CartridgePage = () => {
  return (
    <PageLayout pageTitle="cartridge" widthAuto>
      <CartridgeTable />
    </PageLayout>
  );
}

export default CartridgePage;
