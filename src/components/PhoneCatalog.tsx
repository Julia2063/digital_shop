import React, { useEffect, useMemo, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import phoneList from '../api/phones.json';
import { Phone } from '../types/Phone';
import { Dropdown } from './Dropdown';
import { SearchLink } from './SearchLink';
import { TechInfo } from './TechInfo';

export const PhoneCatalog = () => {
  const [phone, setPhone] = useState(phoneList);
  const sortTypeValues = ['Expensive', 'Cheap', 'Alphabeticaly'];
  const filterTypeValues = phoneList.map(el => el.color)
    .filter((el, i, arr) => !arr.slice(i + 1).includes(el));
  const [searchParams] = useSearchParams();
  const copyPhoneList: Phone[] = useMemo(() => {
    return [...phone];
  }, [phone]);

  const sortType = searchParams.get('sortType');
  const filterType = searchParams.get('filterType');

  const visiblePhones = useMemo(() => {
    if (filterType) {
      return copyPhoneList.filter(el => el.color === filterType);
    }

    return copyPhoneList;
  }, [searchParams, copyPhoneList]);

  useEffect(() => {
    visiblePhones.sort((phone1, phone2) => {
      switch (sortType) {
        case 'Expensive':
          return phone2.price - phone1.price;

        case 'Cheap':
          return phone1.price - phone2.price;

        case 'Alphabeticaly':
          return phone1.name.localeCompare(phone2.name);

        default:
          return 0;
      }
    });

    setPhone(visiblePhones);
  }, [searchParams]);

  const handleReset = () => {
    setPhone(phoneList);
  };

  return (
    <>
      <div className="block--horizontal">
        <div className="block--sort">
          Sort by
          <Dropdown
            type="sortType"
            values={sortTypeValues}
          />
        </div>
        <div className="block--sort">
          Filter by
          <Dropdown
            type="filterType"
            values={filterTypeValues}
          />
        </div>
        <div className="block--sort">
          Reset All
          <button
            className="button sort-button"
            type="button"
            onClick={handleReset}
          >
            <SearchLink params={{ filterType: null, sortType: null }} className="noColoredLink">
              RESET
            </SearchLink>
          </button>
        </div>
      </div>

      <h1 className="title">Phone catalog</h1>

      <div className="container">
        <ul className="catalog">
          {visiblePhones.map(el => {
            const {
              id,
              image,
              itemId,
              name,
            } = el;

            return (
              <NavLink className="catalog__item" key={id} to={itemId}>
                <div className="catalog__item-image">
                  <img
                    className="catalog__item-image-img"
                    src={`https://github.com/mate-academy/react_phone-catalog/blob/master/public/_new/${image}?raw=true`}
                    alt={name}
                  />
                </div>
                <TechInfo phone={el} />
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
};