import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {

  const handleIncrease = () => {
    onUpdateQuantity(item, item.quantity + 1);
  };
  
  const handleDecrease = () => {
    if (item.quantity === 1) { 
      onRemove(item);
    } else {
      onUpdateQuantity(item, item.quantity - 1);
    }
  };
 
  return (
      <div className='cart-item-container'>
        <div className='cart-flex'>
          <Link to={`/item/${item.id}`} className='cart-name'><h3>{item.name}</h3></Link>
          <p className='cart-price'>Price: ${item.price}</p>
          <div className='quantity-btns'>
            <button onClick={handleDecrease}>-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className='remove-btn' onClick={() => onRemove(item)}>Remove</button>
        </div>
      </div>
  );
};

export default CartItem;
