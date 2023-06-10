import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const {onRemove, handleIncrease, handleDecrease } = useContext(CartContext)
  
  return ( 
    <div className='cart-item-container'> 
      <div className='cart-flex'>
        <Link to={`/item/${item.product.id}`} className='cart-name'><h3>{item.product.name}</h3></Link>
        <p className='cart-price'>Price: ${item.product.price}</p>

        <div className='quantity-btns'>
          <button onClick={() => handleDecrease(item)}>-</button>

          <span>{item.quantity}</span>
          
          <button onClick={() => handleIncrease(item)}>+</button>
        </div>
        
        <button className='remove-btn' onClick={() => onRemove(item)}>Remove</button>
        <p>${item.quantity*item.product.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
