import React from 'react';
import favikon from '../assets/icons/favikon.svg';

export const Footer = () => (
  <footer className="footer is-flex">
    <div className="column has-text-centered">
      <a href="/">
        <img src={favikon} alt="logo" width="50" className="" />
      </a>
    </div>

    <div className="column has-text-centered">Made by Juliia Terekhova</div>

    <div className="column has-text-centered">
      <a href="https://github.com/Julia2063/digital_shop" className="noColoredLink">
        <strong>GITHUB</strong>
      </a>
    </div>

  </footer>
);
