
import NavImage from '@/components/NavImage';
import Delivery from '@/components/ourDelivery';
import React, { Suspense } from 'react';
import ShopPage from '@/components/FilterSortBar';

const Shop = async () => {

  return (
    <section className="space-y-10">
      <NavImage heading={"Shop"} path={"Home"} currentPage={"Shop"} />
      <Suspense fallback={<div>Loading...</div>}>
      <ShopPage/>
      </Suspense>
      <Delivery />
    </section>
  );
};

export default Shop;
