import React, { useState } from 'react';
import './Component.css';
function List(props) {
  const description = props.description;
  const price = props.price;
  const [sum, setSum] = useState(props.price);
  const [quantity, setQuantity] = useState(0);

  /*<input
  name="email"
  onChange={(e) => props.getPrice(e.target.value)}
  type="email"
/>*/
  const increment = () => {
    setQuantity(quantity + 1);
    setSum(sum + price);
    props.getTotal(price);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
    setSum(sum - price);
    props.getTotal(-price);
  };

  return (
    <div>
      <div class="product">
        <div>Image</div>
        <h3 class="item">{price}</h3>
        <div class="input-group">
          <input
            onClick={decrement}
            type="button"
            value="-"
            class="button-minus"
            data-field="quantity"
          ></input>
          <input
            onChange={(e) => props.getTotal(e.target.value)}
            type="number"
            value={quantity}
            name="quantity"
            class="quantity-field"
          ></input>
          <input
            onClick={increment}
            type="button"
            value="+"
            class="button-plus"
            data-field="quantity"
          ></input>
        </div>
        <h3 class="item">{sum}</h3>
      </div>
    </div>
  );
}
export default List;
