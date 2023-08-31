import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const NavigationMenu = () => {
  return (
    <div className="sidebar h-100 shadow-lg text-dark">
      <div className="sidebar__profile profile mt-5">
        <div className="profile__photo mb-4">
          <a href='#' className="profile__settings"></a>
        </div>
      </div>
      <nav className="sidebar__nav nav">
        <ul className='nav__list p-0 m-0 d-flex flex-column gap-2 text-uppercase'>
          <li className="nav__item">
            <NavLink
              to="/orders"
              className={({ isActive }) => classNames(
                'nav__link',
                'text-dark',
                { 'nav__link--active': isActive }
              )}
            >Приход
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              to="/groups"
              className={({ isActive }) => classNames(
                'nav__link',
                'text-dark',
                { 'nav__link--active': isActive }
              )}
            >Группы
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/products"
              className={({ isActive }) => classNames(
                'nav__link',
                'text-dark',
                { 'nav__link--active': isActive }
              )}
            >Продукты
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/users"
              className={({ isActive }) => classNames(
                'nav__link',
                'text-dark',
                { 'nav__link--active': isActive }
              )}
            >Пользователи
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/settings"
              className={({ isActive }) => classNames(
                'nav__link',
                'text-dark',
                { 'nav__link--active': isActive }
              )}
            >Настройки
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
