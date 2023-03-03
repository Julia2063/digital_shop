/* eslint-disable no-alert */
import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';

import { Form } from './Form';
import { User } from '../types/User';
import { set } from '../features/userSlice';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (email: string, password:string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const newUser: User = {
          id: user.uid,
          email,
          token: user.refreshToken,
        };

        dispatch(set(newUser));
      })
      .catch(() => alert('invalid user'));
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title has-text-weight-medium">
            LogIn
          </div>
        </header>

        <div className="modal-card-body">
          <p className="block title is-5">
            Or
            {' '}
            <Link className="noColoredLink" to="/register"><strong className="title is-4">register</strong></Link>
          </p>

          <Form title="LogIn" handleClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};
