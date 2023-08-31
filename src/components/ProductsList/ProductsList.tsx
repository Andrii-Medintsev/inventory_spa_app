import React from 'react';
import { Product } from '../Product/Product';
import { ProductType } from '../../types/interfaces';

type Props = {
  products: ProductType[];
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ul className="products__list d-flex flex-column gap-2 m-0 p-0">
      {products.map(product => (
        <Product
          key={product.id}
          product={product} />
      ))}
    </ul>
  );
};
