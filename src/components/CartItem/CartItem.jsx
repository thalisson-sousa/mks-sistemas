/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unknown-property */
import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import {BsFillCartXFill} from 'react-icons/bs';

import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContex';

import './CartItem.css';

export default function CartItem({data}) {

  const { cartItems, setCartItems } = useContext(AppContext);
  const {id, photo, name, price} = data;
  const [qtd, setQtd] = useState(1);
  const [value, setValue] = useState(price);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  const changeAddItem = (event) => {
    if(event > 0 ) {
      setQtd(event)
      setValue(price * event)
    }
  }

  return (
    <section>
      <div className="cart-item">
        <div className="cart-item-content">
          <img src={photo} alt="imagem do produto" className="cart-item-img" />
          <h3 className="cart-item-title">{name}</h3>
          
          <div data-app="product.quantity" id="quantidade">
            <label className="label-text">Qtd:</label>
            <div className='input-quantidade'>
              <input type="button" id="plus" value='-' onClick={() => changeAddItem(qtd - 1)} />
              <input id="quant" name="quant" className="text" size="1" minLength="1" type="text" value={qtd} maxlength="5" />
              <input type="button" id="minus" value='+' onClick={() => changeAddItem(qtd + 1)} />
            </div>
          </div>
          
          <h3 className="cart-item-price">{formatCurrency(value, 'BRL')}</h3>
          
          <button onClick={ handleRemoveItem } type="button" className="button__remove-item"><BsFillCartXFill/></button>
        </div>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
