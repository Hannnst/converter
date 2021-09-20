import React from 'react';
import Product from './Product.js';
function List(props) {
  const listItems = props.products.map((p) => (
    <li key={p.description}>
      {p.description} {p.price}
    </li>
  ));

  const allProducts = props.products.map((p) => (
    <Product
      getTotal={props.getTotal}
      description={p.description}
      price={p.price}
      src={p.src}
    ></Product>
  ));

  /*<input
  name="email"
  onChange={(e) => props.getPrice(e.target.value)}
  type="email"
/>*/
  return (
    <div>
      <div>{allProducts}</div>
    </div>
  );
}
export default List;
