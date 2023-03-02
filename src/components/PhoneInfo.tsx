import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import phoneList from '../api/phones.json';
import { Phone } from '../types/Phone';
import { TechInfo } from './TechInfo';

export const PhoneInfo = () => {
  const [phone, setPhone] = useState<Phone | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const phoneItem = phoneList.find(el => el.itemId === slug);

    if (phoneItem) {
      setPhone(phoneItem);
    }
  }, []);

  return (
    <>
      <h1 className="title">{phone?.name}</h1>
      <div className="phoneInfo__section">
        <div className="phoneInfo__image">
          <img
            className="phoneInfo__image-img"
            src={`https://github.com/mate-academy/react_phone-catalog/blob/master/public/_new/${phone?.image}?raw=true`}
            alt={phone?.name}
          />
        </div>
        <div className="phoneInfo__info">
          {phone && <TechInfo phone={phone} />}
        </div>
      </div>
      <div className="phoneInfo__section">
        <div className="phoneInfo__info">
          <h2 className="title is-4">About</h2>
          <p className="phoneInf__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae expedita veniam non?
            Perferendis ratione quo voluptatum molestiae optio, ipsam dignissimos.
            Nobis dolorum asperiores consectetur repellendus neque quia libero fugiat?
          </p>
        </div>
        <div className="phoneInfo__info">
          <h2 className="title is-4">Tech specs</h2>
          <p className="phoneInf__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae expedita veniam non?
            Perferendis ratione quo voluptatum molestiae optio, ipsam dignissimos.
            Nobis dolorum asperiores consectetur repellendus neque quia libero fugiat?
          </p>
        </div>

      </div>

    </>
  );
};
