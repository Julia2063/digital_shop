import React, { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { set } from '../features/cartSlice';

import { Phone } from '../types/Phone';
import { useLocalStorage } from '../utils/useLocalStorage';

interface Props {
  phone: Phone,
}

export const TechInfo: React.FC<Props> = ({ phone }) => {
  const {
    name,
    price,
    screen,
    capacity,
    ram,
  } = phone;

  const dispatch = useAppDispatch();
  const [cart, setCart] = useLocalStorage<Phone[]>('cart', []);

  const handleFillCart = () => {
    const newCart = [...cart, phone];

    setCart(newCart);
  };

  useEffect(() => {
    dispatch(set(cart));
  }, [cart]);

  return (
    <>
      <h2 className="catalog__item-title">
        {`${name} (iMT9G2FSA)`}
      </h2>
      <div className="catalog__item-prices">
        <span className="catalog__item-price">
          {`${price} ₴`}
        </span>
      </div>
      <div className="catalog__item-property">
        <p className="catalog__item-text">Screen</p>
        <p className="catalog__item-meaning">
          {screen.replace('\'', '\'\'')}
        </p>
      </div>
      <div className="catalog__item-property">
        <p className="catalog__item-text">Capacity</p>
        <p className="catalog__item-meaning">
          {capacity}
        </p>
      </div>
      <div className="catalog__item-property--last">
        <p className="catalog__item-text">RAM</p>
        <p className="catalog__item-meaning">
          {ram}
        </p>
      </div>
      <div className="catalog__item-property">
        <button
          className="catalog__item-button"
          type="button"
          onClick={handleFillCart}
        >
          Add to cart
        </button>
        <div className="catalog__item-like"></div>
      </div>

    </>
  );
};
