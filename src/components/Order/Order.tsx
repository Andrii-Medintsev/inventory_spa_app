import React from 'react';
import { OrderType } from '../../types/interfaces';
import { dateFormat } from '../../utils/utils';

type Props = {
  order: OrderType,
}

export const Order: React.FC<Props> = ({ order }) => {
  const orderProducts = order.products;

  return (
    <li className="order d-flex align-items-center gap-4 border rounded-1 bg-light px-3 py-1">
      <div className="order__title">
        {order.title}
      </div>
      <div className="order__date">{dateFormat(order.date)}</div>
      <div className="order__description">{order.description}</div>
    </li>
  );
};
