import React, { useContext } from 'react';
import propTypes from 'prop-types';
//import {BsFillCartPlusFill} from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContex';

import './ProductCard.css';
import ShoppingBag from '../Shopping-bag/ShoppingBag';

function ProductCard({data}) {

  
  const {name, photo, description, price} = data;
  
  const {cartItems, setCartItems} = useContext(AppContext);
  //console.log(photo);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return(
    <section className="product-card">
      <img 
        src={photo}
        alt="product" 
        className="card__image"/>

      <div className="card__infos">
        <div className="card__aline">
          <h2 className="card__price">{`R$${formatCurrency(price, 'BRL')}`}</h2>
          <h2 className="card__title">{name}</h2>
        </div>
        <h6>{description}</h6>
      </div>

      <div className="button__add">
        <button onClick={handleAddCart} type="button" className="button__add-cart">
          <ShoppingBag/>
          <p>COMPRAR</p>
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
