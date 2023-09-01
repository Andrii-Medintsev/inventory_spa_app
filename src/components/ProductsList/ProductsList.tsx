import React from 'react';
import { Product } from '../Product/Product';
import { ProductType } from '../../types/interfaces';

type Props = {
  products: ProductType[];
  isSmallCard: boolean;
}

export const ProductsList: React.FC<Props> = ({
  products,
  isSmallCard,
}) => {
  return (
    <ul className="products__list d-flex flex-column gap-2 m-0 p-0">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          isSmallCard={isSmallCard}
        />
      ))}
    </ul>
  );
};
