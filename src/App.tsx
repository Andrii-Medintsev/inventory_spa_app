import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NavigationMenu } from './components/NavigationMenu/NavigationMenu';
import { TopMenu } from './components/TopMenu/TopMenu';

import './App.scss';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const location = useLocation();

  return (
    <div className="App text-secondary vh-100">
      <TopMenu />

      <div className="main h-100 d-flex">
        <NavigationMenu />

        <div className="main__content w-100 py-5 ps-5">
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={300}
            >
              <Routes location={location}>
                <Route index element={<h1>Home</h1>} />
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
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div >
  );
};

export default App;
