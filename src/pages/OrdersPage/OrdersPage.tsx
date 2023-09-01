import React, { useState } from 'react';
import { orders } from '../../data';
import { Order } from '../../components/Order/Order';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { MyModal } from '../../components/Modal/Modal';

export const OrdersPage = () => {
  const [visibleOrders, setVisibleOrders] = useState([...orders ]);

  const [ selectedOrderId, setSelectedOrderId ] = useState(0);
  const [ isDeleting, setIsDeleting ] = useState(false);

  const selectedOrder = orders.find(order => order.id === selectedOrderId);

  const handleDeletePreparing = (orderId: number) => {
    setSelectedOrderId(orderId);
    setIsDeleting(true);
  };

  const handleOrderDelete = (id: number) => {
    setVisibleOrders(visibleOrders.filter(order => order.id !== id));
  };

  return (
    <>
      <div className='d-flex gap-1'>
        <ul className="products__list d-flex flex-column gap-2 m-0 p-0 pe-3 overflow-scroll text-nowrap">
          {visibleOrders.map(order => (
            <Order
              key={order.id}
              order={order}
              onSelectOrderId={setSelectedOrderId}
              handleOrderDelete={handleDeletePreparing}
              isSmall={false}
            />

          ))}
        </ul>

        {selectedOrder
          && !isDeleting
          && selectedOrderId !== 0
          && (
            <div className="order-details">
              <div
                className="order-details__close"
                onClick={() => setSelectedOrderId(0)}
              ></div>
              <ProductsList
                products={selectedOrder?.products}
                isSmallCard={true}
              />
            </div>
          )
        }
      </div>

      <MyModal
        isDeleting={isDeleting}
        handleDeleting={setIsDeleting}
        setSelectedItemId={setSelectedOrderId}
        selectedItem={selectedOrder}
        handleOrderDelete={handleOrderDelete}
      />
    </>
  );
};
