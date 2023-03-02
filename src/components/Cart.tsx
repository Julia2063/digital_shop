import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from '../types/Phone';
import { useLocalStorage } from '../utils/useLocalStorage';

interface Props {
  setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart: React.FC<Props> = ({ setIsCart }) => {
  const location = useLocation();
  const handleClose = () => {
    location.pathname = '/phones_catalog';
    setIsCart(false);
  };

  const [cart, setCart] = useLocalStorage<Phone[]>('cart', []);

  const groupedCart = cart.map((el, i, arr) => {
    return [el.id, arr.filter(e => e.id === el.id).length];
  }).map(el => el[0]).filter((el, i, arr) => !arr.slice(i + 1).includes(el));

  const visibledCart = groupedCart.map(el => cart.find(e => e.id === el));

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    const newCart = cart.filter(el => el.id !== id);

    setCart(newCart);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />

      <div className="modal-card">
        <header className="modal-card-head">
          <div
            className="modal-card-title has-text-weight-medium"
          >
            Cart
          </div>

          <button
            type="button"
            aria-label="Mute volume"
            className="delete"
            onClick={handleClose}
          >
          </button>
        </header>

        <div className="modal-card-body">
          <table className="table is-fullwidth">
            <tbody>
              {visibledCart.map((el, i) => {
                const { name, price, id } = el as Phone;
                const count = cart.filter(e => id === e.id).length;

                return (
                  <tr key={id}>
                    <td>
                      {i + 1}
                    </td>
                    <td>
                      {name}
                    </td>
                    <td>
                      {`x ${count}`}
                    </td>
                    <td>
                      {`${price}₴`}
                    </td>
                    <td>
                      <button
                        id={id}
                        type="button"
                        aria-label="Mute volume"
                        className="delete"
                        onClick={handleDelete}
                      >
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
          <footer className="modal-card-foot has-text-right is-justify-content-flex-end">
            <div className="title is-4">
              {`${cart.map(el => el.price).reduce((a, b) => a + b, 0)} ₴`}
              <p className="block--sort">{`total for ${cart.length} items`}</p>
            </div>
          </footer>
        </div>

      </div>
    </div>

  );
};
