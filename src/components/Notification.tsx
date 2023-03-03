import React from 'react';
import { Link } from 'react-router-dom';

export const Notification = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title has-text-weight-medium">
            Notification
          </div>
        </header>
        <div className="modal-card-body has-text-weight-medium ">
          To add an item to your cart, you need
          {' '}
          <Link to="/login"><strong className="title is-5">LogIn</strong></Link>
          {' '}
          or
          {' '}
          <Link to="/register"><strong className="title is-5">Sign Up</strong></Link>
        </div>
      </div>
    </div>

  );
};
