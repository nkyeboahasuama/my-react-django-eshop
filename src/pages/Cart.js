import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ onRemove ,onUpdateQuantity ,totalPrice, cartItems }) => {    

  return (
    <div>  
      <h2 className='checkout-title'>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p> 
      ) : (
        <div>
            <div className='cart-table'>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} onRemove={onRemove} onUpdateQuantity={onUpdateQuantity}/>
                ))}
            </div>
            <p className='cart-total'>Total price: ${totalPrice.toFixed(2)}</p>
            <Link to={'/checkout/'}><button className='cart-checkout-btn'>Checkout</button></Link>
        </div>
      )}
    </div>
  ); 
};  
 
export default Cart;
