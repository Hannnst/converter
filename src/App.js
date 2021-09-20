import React, { useState } from 'react';
import ReactDom from 'react-dom';
import List from './Components/List.js';
// ## Exercise 4

// Create a cart component that will display a list of products in cart. For the products you can use the same array from the products page but with a new key value pair for the quantity.

// Requirements:

// - you can use React Hooks or class components for this exercise
// - you should display the total cost of the products
// - you should be able to change the product's quantity
// - you should display a free shipping green message once the total gets to 500€ or more, otherwise not eligible for a free shipping red message.

// [Screenshot of cart example](https://barcelonacodeschool.com/files/pics/cur_files/reactB4E4.png)

// ***Your solution goes to the ex04 folder***

function App(props) {
  
  let img1 = 'https://pricespy-75b8.kxcdn.com/product/standard/280/5755951.jpg';
  const products = [
    { description: 'pants', price: 55, src: { img1 } },
    { description: 'shirt', price: 799, src: { img1 } },
    { description: 'shoes', price: 349, src: { img1 } },
  ];
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('Not eligible for free shipping');
  const [color, setColor] = useState('red');

  // every time price is updated, a global app list containing all bought items will be updated.
  const getTotal = (e) => {
    setShipping(total);
    setTotal(total + e);
  };

  const setShipping = ({ total }) => {
    if (total >= 500) {
      setMessage('FREE SHIPPING');
      setColor('green');
    } else {
      setMessage('Not eligible for free shipping');
      setColor('red');
    }
  };

  return (
    <div>
      <div></div>
      <h1>CART</h1>
      <h1>TOTAL: {total}</h1>
      <List products={products} getTotal={getTotal} />
      <p style={{ color: color }}> {message} </p>
    </div>
  );
}
export default App;
