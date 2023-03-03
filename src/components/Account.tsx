import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { set } from '../features/userSlice';
import { useAuth } from '../hooks/use-auth';

export const Account = () => {
  const dispatch = useAppDispatch();

  const { email } = useAuth();

  return (
    <div className="container">
      <h1 className="title is-1">Account</h1>
      <div className="level-item">
        <button
          className="button is-link"
          type="button"
          onClick={() => dispatch(set(null))}
        >
          Log out from
          {' '}
          {email}
        </button>
      </div>

    </div>
  );
};
