import React from 'react';
import { OrderType } from '../../types/interfaces';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import './Order.scss';

type Props = {
  order: OrderType,
  onSelectOrderId?: (id: number) => void,
  handleOrderDelete?: (id: number) => void,
  isSmall: boolean,
}

export const Order: React.FC<Props> = ({
  order,
  onSelectOrderId,
  handleOrderDelete,
  isSmall
}) => {
  const date = new Date(order.date);

  const monthNumber = '0' + (date.toLocaleString('ru', { month: 'numeric' }));
  const monthStr = date
    .toLocaleString('ru', { month: 'short' })
    .slice(0, -1);
  const preparedMonth = monthStr[ 0 ].toUpperCase() + monthStr.slice(1);
  const day = date.toLocaleDateString('ru', { day: 'numeric' });

  const fullYear = +date.toLocaleString('default', { year: 'numeric' });

  const orderProducts = order.products;
  const orderProductsSumUah = orderProducts
    .map(pr => pr.price[1].value)
    .reduce((acc, current) => acc + current);

  const orderProductsSumUsd = orderProducts
    .map(pr => pr.price[0].value)
    .reduce((acc, current) => acc + current);

  return (
    <li
      className="order d-flex align-items-center gap-4 justify-content-between border rounded-1 bg-light px-3 py-1"
      onClick={() => onSelectOrderId && onSelectOrderId(order.id)}
    >
      <div className="order__title">
        {order.title}
      </div>

      <div className="d-flex flex-column">
        <span className='order__products-amount'>
          {`${orderProducts.length}`}
        </span>
        <span>Продукта</span>
      </div>

      <div className="order__dates d-flex flex-column align-items-center">
        <div className="order__dates--short">{`${monthNumber.slice(-2)} / ${fullYear % 100}`}</div>
        <div className="order__dates--long">{`${day} / ${preparedMonth} / ${fullYear}`}</div>
      </div>

      {!isSmall && (
        <div className="order__sum">
          <div className="order__sum--usd small">{`${orderProductsSumUsd} $`}</div>
          <div className="order__sum--uah">{`${orderProductsSumUah} uah`}</div>
        </div>
      )}

      {!isSmall && (
        <div onClick={() => handleOrderDelete && handleOrderDelete(order.id)}>
          <DeleteButton />
        </div>
      )}

    </li>
  );
};
