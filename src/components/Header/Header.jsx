import React from 'react';

import './Header.css';
import CartButton from '../CartButton/CartButton';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <h1 className="title__one">MKS</h1>
          <h2 className="title__two">Sistemas</h2>
        </div>
        <CartButton/>
      </div>
    </header>
  );
}
