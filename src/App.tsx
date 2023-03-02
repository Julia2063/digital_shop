import React, { useEffect, useState } from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { PhoneCatalog } from './components/PhoneCatalog';
import { PhoneInfo } from './components/PhoneInfo';
import { Cart } from './components/Cart';
import { useLocalStorage } from './utils/useLocalStorage';
import { Phone } from './types/Phone';
import { set } from './features/cartSlice';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);
  const [cart] = useLocalStorage<Phone[]>('cart', []);

  useEffect(() => {
    dispatch(set(cart));
  }, [cart]);

  return (
    <>
      <div>
        <Navbar setIsCart={setIsCart} />
      </div>
      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="phones_catalog">
              <Route index element={(<PhoneCatalog />)} />
              <Route path=":slug" element={(<PhoneInfo />)} />
            </Route>
            <Route path="cart" element={isCart && <Cart setIsCart={setIsCart} />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>

  );
};
