import React, { useState } from 'react';
import { ReactComponent as Shield } from '../../images/shield-half.svg';
import { ReactComponent as Clock } from '../../images/time.svg';

export const TopMenu = () => {
  const date = new Date();

  const dayStr = date.toLocaleDateString('ru', { weekday: 'long' });
  const dayToShow = dayStr[0].toUpperCase() + dayStr.slice(1);
  const dayNumber = '0' + date.toLocaleDateString('default', { day: 'numeric'});
  const month = date.toLocaleDateString('ru', { month: 'short'}).slice(0, -1);
  const monthToShow = month[0].toUpperCase() + month.slice(1);
  const year = date.toLocaleDateString('ru', { year: 'numeric' });

  const time = date.toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();

    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <header className="header shadow-lg p-2">
      <div className="header__container container-md d-flex justify-content-between align-items-center p-0">
        <div className="header__left d-flex align-items-center">
          <a href='/home' className="header__logo d-flex align-items-center gap-4">
            <Shield width={35} />
            <span className='header__logo-text text-uppercase'>Inventory</span>
          </a>
          <form action="#" method="get" className='d-inline-block ms-5'>
            <input className="header__input bg-light form-control me-2 py-1 rounded-1" type="search" placeholder="Поиск" aria-label="Search" />
          </form>
        </div>

        <div className="header__date-time d-flex flex-column">
          <span className="header__day-name">{dayToShow}</span>
          <span className="header__date d-flex gap-3">{`${dayNumber.slice(-2)} / ${monthToShow} / ${year}`}
            <span className='header__time d-flex align-items-center gap-1'>
              <Clock width={12} height={12} />
              {currentTime}
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};
