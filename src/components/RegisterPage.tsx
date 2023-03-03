/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { useAppDispatch } from '../app/hooks';
import { set } from '../features/userSlice';
import { User } from '../types/User';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password:string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const newUser: User = {
          id: user.uid,
          email,
          token: user.refreshToken,
        };

        dispatch(set(newUser));
      })
      .catch(console.error);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title has-text-weight-medium">
            Register Page
          </div>
        </header>

        <div className="modal-card-body">
          <p className="block title is-5">
            Already have an account?
            {' '}
            <Link to="/login" className="noColoredLink"><strong className="title is-4">Sing in</strong></Link>
          </p>
          <Form title="Sign Up" handleClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};
