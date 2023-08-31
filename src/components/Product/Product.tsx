import React from 'react';
import { ProductType } from '../../types/interfaces';
import { dateFormat } from '../../utils/utils';

type Props = {
  product: ProductType;
}

export const Product: React.FC<Props> = ({ product }) => (
  <li className="products__card product d-flex align-items-center gap-4 border rounded-1 bg-light px-3 py-1">
    <div className="product__bullet flex-shrink-0 rounded-1"></div>

    <div className="product__nameSN">
      <div className="product__name text-nowrap">{product.title}</div>
      <div className="product__SN">{product.serialNumber}</div>
    </div>

    <div className="product__type">
      {product.type}
    </div>

    <div className="product__guarantee">
      <div className="product__guarantee--start d-flex align-items-center justify-content-between">
        <span className="product__small-text ">c </span>{dateFormat(product.guarantee.start)}
      </div>
      <div className="product__guarantee--end">
        <span className="product__small-text">по </span>{dateFormat(product.guarantee.end)}
      </div>
    </div>

    <div className="product__price">
      <div className="product__price--usd">
        <span className="product__small-text">{`${product.price[ 0 ].value} $`}</span>
      </div>
      <div className="product__price--uah text-">{`${product.price[ 1 ].value} uah`}</div>
    </div>

    <div className="product__order">
      {product.order}
    </div>

    <button className="border-0 bg-light">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="gray" className="bi bi-trash3-fill product__delete" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
      </svg>
    </button>
  </li>
);
