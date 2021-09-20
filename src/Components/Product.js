import React, { useState } from 'react';
import './Component.css';
import Button from '@material-ui/core/Button';

function List(props) {
  const description = props.description;
  const price = props.price;
  const [sum, setSum] = useState(props.price);
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
    setSum(sum + price);
    props.getTotal(price);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setSum(sum - price);
      props.getTotal(-price);
    }
  };

  return (
    <div>
      <div class="product">
        <image class="item" src={props.src}>
          Image
        </image>
        <div class="item">{description}</div>
        <h3 class="item">{price}</h3>
        <div class="input-group">
          <input
            onClick={decrement}
            type="button"
            value="-"
            class="button-minus"
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
          ></input>
        </div>
        <h3 class="item">{sum}</h3>
      </div>
    </div>
  );
}
export default List;
