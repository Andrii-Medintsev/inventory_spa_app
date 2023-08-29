import React from 'react';
import './App.scss';
import { ReactComponent as Shield } from './images/shield-half.svg';
import { ReactComponent as Clock } from './images/time.svg';

const App = () => {
  return (
    <div className="App text-secondary">
      <header className="header shadow-lg p-2">
        <div className="header__container container d-flex justify-content-between align-items-center p-0">
          <div className="header__left d-flex align-items-center">
            <div className="header__logo d-flex align-items-center gap-4">
              <Shield width={35} />
              <span className='header__logo-text text-uppercase'>Inventory</span>
            </div>
            <form action="/" method="get" className='d-inline-block ms-5'>
              <input className="header__input bg-light form-control me-2 py-1" type="search" placeholder="Поиск" aria-label="Search" />
            </form>
          </div>

          <div className="header__date-time d-flex flex-column">
            <span className="header__day-name">Вторник</span>
            <span className="header__date d-flex gap-3">06 Апр, 2017
              <span className='header__time d-flex align-items-center gap-1'>
                <Clock width={12} height={12} />
                17:20
              </span>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
