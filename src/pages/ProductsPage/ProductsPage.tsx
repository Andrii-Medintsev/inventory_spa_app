import React, { useState } from 'react';
import { products } from '../../data';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { ProductType } from '../../types/interfaces';

export const ProductsPage = () => {
  const [ filterOption, setFilterOption ] = useState('');

  const initialProducts = [ ...products ];

  const filterProducts = (products: ProductType[], option: string) => {
    if (!option) {
      return products;
    }

    return products.filter(product => product.type === option);
  };

  const visibleProducts = filterProducts(initialProducts, filterOption);

  return (
    <div className="products">
      <div className="products__top mb-4 d-flex gap-5">
        <h2 className=" products__title text-dark m-0 text-nowrap">{`Продукты / ${products.length}`}
        </h2>

        <div className="products__filter w-50 d-flex align-items-center gap-2">
          <span>Тип:</span>
          <select
            className="form-select w-100 form-select-sm m-0"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value=''>All</option>
            <option value="Monitors">Monitors</option>
            <option value="Laptops">Laptops</option>
            <option value="Keyboards">Keyboards</option>
          </select>
        </div>
      </div>

      <ProductsList
        products={visibleProducts}
        isSmallCard={false}
      />
    </div>
  );
};
