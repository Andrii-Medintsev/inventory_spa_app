import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavigationMenu } from './components/NavigationMenu/NavigationMenu';
import { TopMenu } from './components/TopMenu/TopMenu';

import './App.scss';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';

const App = () => {
  return (
    <div className="App text-secondary vh-100">
      <TopMenu />

      <div className="main h-100 d-flex">
        <NavigationMenu />

        <div className="main__content w-100 py-5 ps-5">
          <Routes>
            <Route
              path="/home"
              element={<h1>Home</h1>}
            />
            <Route
              path="/orders"
              element={<OrdersPage />}
            />
            <Route
              path="/products"
              element={<ProductsPage />}
            />
            <Route
              path="*"
              element={<h1>{'Page is empty'}</h1>}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
