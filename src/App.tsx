import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
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
import { Account } from './components/Account';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { Notification } from './components/Notification';
import { useAppSelector } from './app/hooks';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [isCart, setIsCart] = useState(false);
  const [cart] = useLocalStorage<Phone[]>('cart', []);
  const { user } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(set(cart));
  }, [cart]);

  return (
    <div>
      <Navbar setIsCart={setIsCart} />

      <div className="section">
        <div className="container">
          <Routes>
            <Route
              path="*"
              element={<h1 className="title is-1">Page not found</h1>}
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
            <Route path="account" element={user ? <Account /> : <LoginPage />} />
            <Route path="register" element={!user && <RegisterPage />} />
            <Route path="login" element={!user && <LoginPage />} />
            <Route path="notification" element={<Notification />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>

  );
};
