import React, { useContext } from 'react';

import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContex';
import './Cart.css';
import formatCurrency from '../../utils/formatCurrency';

export default function Cart() {
  const {cartItems, isCartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => parseInt(item.price) + acc, 0);

  return (
    <section className={`Cart ${isCartVisible ? 'cart-active' : ''}`}>
      <h1>Carrinho</h1>
      <h2>de compras</h2>
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem className="cart-item" key={cartItem.id} data={cartItem} />)}
      </div>

      <div className="cart-resume">
        <p>Total:</p>
        {formatCurrency(totalPrice, 'BRL')}
      </div>
      <button className="finish-button">Finalizar Compra</button>
    </section>
  );
}
