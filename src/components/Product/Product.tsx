import React from 'react';
import { ProductType } from '../../types/interfaces';
import { dateFormat } from '../../utils/utils';
import classNames from 'classnames';
import { DeleteButton } from '../DeleteButton/DeleteButton';

type Props = {
  product: ProductType;
  isSmallCard: boolean
};

export const Product: React.FC<Props> = ({
  product,
  isSmallCard
}) => (
  <li className="products__card product d-flex align-items-center gap-4 border rounded-1 bg-light px-3 py-1">
    <div className="product__bullet flex-shrink-0 rounded-1"></div>

    <div className="product__nameSN">
      <div className="product__name text-nowrap">{product.title}</div>
      <div className="product__SN">{product.serialNumber}</div>
    </div>

    <div
      className={
        classNames(
          'product__type',
          { 'd-none d-lg-block': isSmallCard }
        )
      }
    >
      {product.type}
    </div>

    <div
      className={
        classNames(
          'product__guarantee',
          { 'd-none d-lg-block': isSmallCard }
        )
      }
    >
      <div className="product__guarantee--start d-flex align-items-center justify-content-between">
        <span className="product__small-text ">c </span>{dateFormat(product.guarantee.start)}
      </div>
      <div className="product__guarantee--end">
        <span className="product__small-text">по </span>{dateFormat(product.guarantee.end)}
      </div>
    </div>

    <div
      className={
        classNames(
          'product__price',
          { 'd-none d-lg-block': isSmallCard }
        )
      }
    >
      <div className="product__price--usd">
        <span className="product__small-text">{`${product.price[ 0 ].value} $`}</span>
      </div>
      <div className="product__price--uah text-">{`${product.price[ 1 ].value} uah`}</div>
    </div>

    <div
      className={
        classNames(
          'product__order',
          { 'd-none d-lg-block': isSmallCard }
        )
      }
    >
      {`Order ${product.order}`}
    </div>

    <DeleteButton />
  </li>
);
