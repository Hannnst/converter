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
  const products = [
    { description: 'pants', price: 55 },
    { description: 'shirt', price: 799 },
    { description: 'shoes', price: 349 },
  ];
  const [total, setTotal] = useState(0);

  // every time price is updated, a global app list containing all bought items will be updated.
  const getTotal = (e) => {
    setTotal(total + e);
  };
  const getSum = (e) => {
    setSum(e);
  };
  // Functionality for the product quantity, can be put in its own component!
  /*function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  $('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
  });
  
  $('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
  });*/

  return (
    <div>
      <div></div>
      <h1>CART</h1>
      <h1>TOTAL: {total}</h1>
      <List products={products} getTotal={getTotal} />
    </div>
  );
}
export default App;
