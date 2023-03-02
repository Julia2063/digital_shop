import classNames from 'classnames';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchLink } from './SearchLink';

interface Props {
  type: string;
  values: string[];
}

export const Dropdown: React.FC<Props> = ({ type, values }) => {
  const [active, setActive] = useState(false);
  const [searchParams] = useSearchParams();

  const value = searchParams.get(`${type}`);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div
      className={classNames('dropdown', { 'is-active': active })}
    >
      <div className="dropdown-trigger">
        <button
          className="button sort-button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          type="button"
          onClick={toggle}
        >
          <span>
            {value || 'Choose a Type'}
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {values.map(el => {
            return (
              <SearchLink
                params={{ [type]: el }}
                key={el}
                className="dropdown-item"
                onClick={toggle}
              >
                {el}
              </SearchLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
