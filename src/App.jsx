import React from 'react';
import Header from './components/Header/Header';
import Products from './components/products/products';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Provider>
      <Header/>
      <Products/>
      <Cart/>
      <Footer />
    </Provider>
    
  );
}

export default App;
