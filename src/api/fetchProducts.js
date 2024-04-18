const fetchProducts = async () => {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC');
  const data = await response.json();

  //console.log(data.products);
  return data.products;
};

export default fetchProducts;
