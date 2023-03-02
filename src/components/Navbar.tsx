import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PageNavLink } from './PageNavLink';

import cartImg from '../assets/icons/cartImg.svg';
import accaunt from '../assets/icons/accaunt.svg';
import favikon from '../assets/icons/favikon.svg';

import { useAppSelector } from '../app/hooks';

interface Props {
  setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({ setIsCart }) => {
  const { phones } = useAppSelector(state => state.cart);

  const handleCart = () => {
    setIsCart(true);
  };

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container is-flex is-flex-wrap-nowrap is-justify-content-space-between ">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={favikon} alt="logo" width="80" />
          </Link>
          <PageNavLink to="/" text="HOME PAGE" />
          <PageNavLink to="phones_catalog" text="PHONES CATALOG" />
        </div>
        <div className="navbar-brand is-flex">
          <NavLink to="accaunt" className="navbar-item" onClick={handleCart}>
            <img src={accaunt} alt="cart" className="icon" />
          </NavLink>
          <NavLink to={phones.length > 0 ? 'cart' : 'phones_catalog'} className="navbar-item" onClick={handleCart}>
            <span>
              {`(${phones.length})`}
            </span>
            <img src={cartImg} alt="cart" className="icon" />
          </NavLink>
        </div>
      </div>

    </nav>
  );
};
