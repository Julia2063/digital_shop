import React from 'react';
import { Link } from 'react-router-dom';
import favikon from '../assets/icons/favikon.svg';

export const Footer = () => (
  <footer className="footer is-flex">
    <div className="column has-text-centered">
      <Link to="/">
        <img src={favikon} alt="logo" width="50" className="" />
      </Link>
    </div>

    <div className="column has-text-centered">Made by Juliia Terekhova</div>

    <div className="column has-text-centered">
      <a href="https://github.com/Julia2063/digital_shop" className="noColoredLink">
        <strong>GITHUB</strong>
      </a>
    </div>

  </footer>
);
