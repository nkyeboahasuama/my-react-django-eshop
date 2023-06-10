import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { NotificationsContext } from '../contexts/NotificationsContext';

const Cart = () => {    
  const { totalPrice, cartItems } = useContext(CartContext)
  const {notification, setNotification} = useContext(NotificationsContext)

  const handleCartUpdate = () => {
    const username = localStorage.getItem('username');
    if (username) {
      const cartItemsKey = `cartItems_${username}`;
      localStorage.setItem(cartItemsKey, JSON.stringify(cartItems));
      console.log(username,cartItems)
      console.log(cartItemsKey)
    } else {
      console.log('User token not found');
    }
    setNotification('Cart updated');

        setTimeout(() => {
            setNotification('');
        }, 1000);
  };

  return (
    <div>  
      <h2 className='black-color'>Shopping Cart</h2>
      {cartItems.length === 0 ? ( 
        <p className='black-color'>Cart is empty</p>  
      ) : (
        <div> 
            <div className='cart-table'>
                {cartItems.map((item) => (
                    <CartItem key={item.product.id} item={item}/>
                ))}
            </div>
          
            <div className='flex-total-checkout'>
              <p className='cart-total'>Total price: ${totalPrice}</p>

              {/*Update this section. Let the Checkout button handle the handleCartUpdate function*/}

              <Link to={'/checkout/'}><button className='cart-checkout-btn'>Checkout</button></Link>
            </div>
            
            <button onClick={handleCartUpdate}>Update Cart</button>
            <p className='notification'>{notification}</p>
        </div>
      )}
    </div>
  );  
};  
 
export default Cart;
