import React from 'react';
import favikon from '../assets/icons/favikon.svg';

export const Footer = () => (
  <footer className="footer">
    <a href="/">
      <img src={favikon} alt="logo" width="50" />
    </a>
    <p>Made by Juliia Terekhova</p>
    <a href="https://github.com/Julia2063/digital_shop" className="noColoredLink">
      <strong>GITHUB</strong>
    </a>
  </footer>
);
