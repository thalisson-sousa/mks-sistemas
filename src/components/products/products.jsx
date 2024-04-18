import React, {useEffect, useContext} from 'react';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContex';

import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

import './Products.css';

function Products() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);

  useEffect(() => {

    fetchProducts().then((data) => {
      
      setProducts(data);
      setLoading(false);
    });

  }, []);

  return (
    (loading ? <Loading/> : 
      <section className="products container">
        {
          products.map((product) => <ProductCard key={product.id} data={product} />)
        }
      </section>
    )
  );
}

export default Products;
