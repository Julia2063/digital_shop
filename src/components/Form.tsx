/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

interface Props {
  title: string,
  handleClick: (email: string, pass: string) => void,
}

export const Form: React.FC<Props> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="form">
      <div className="field">
        <label className="label">Email</label>
        <div className="control ">
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
        </div>
      </div>

      <button className="button is-link" type="submit" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};
