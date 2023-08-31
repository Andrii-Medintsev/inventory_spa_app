import React from 'react';
import { orders } from '../../data';
import { Order } from '../../components/Order/Order';

export const OrdersPage = () => {
  const visibleOrders = [ ...orders ];

  return (
    <ul className="products__list d-flex flex-column gap-2 m-0 p-0 pe-3 overflow-scroll text-nowrap">
      {visibleOrders.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      ))}
    </ul>
  );
};
