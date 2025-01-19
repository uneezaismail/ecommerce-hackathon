
import NavImage from '@/components/NavImage';
import Delivery from '@/components/ourDelivery';
import React from 'react';
import ShopPage from '@/components/FilterSortBar';

const Shop = async () => {

  return (
    <section className="space-y-10">
      <NavImage heading={"Shop"} path={"Home"} currentPage={"Shop"} />
      <ShopPage/>
      <Delivery />
    </section>
  );
};

export default Shop;
