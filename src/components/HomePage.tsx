import React from 'react';
import { HomeSlider } from './HomeSlider';
import title from '../assets/images/title.svg';

export const HomePage = () => {
  return (
    <div className="container">
      <img src={title} alt="Title" className="home-page__title" />
      <HomeSlider />
    </div>
  );
};
