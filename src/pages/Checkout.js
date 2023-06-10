import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext)
    let token = localStorage.getItem('token')

    const createOrder = async () => {
    try {
      const response = await fetch('/api/orders/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': `Token ${token}`},
        body: JSON.stringify({ cartItems })
        
        });console.log(cartItems)
        if(!response.ok){
          const data = await response.json()
          throw new Error(data.error)
        }
        const data = await response.json()
        console.log('Order created:', data)
        }
        catch (error){
        console.error(error)
        }
    };

    return ( 
        <div>
            <h2 className="black-color">Checkout Form</h2>
            <div className='checkout'>

                <div className='shipping-form'>
                    <h3 className='heading'>Shipping Information</h3>

                    <div className='shipping-flex'>

                        <div className='shipping-item'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>

                        <div className='shipping-item'>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" name="address" />
                        </div>

                        <div className="flex">
                            <div className='shipping-item'>
                                <label htmlFor="city">Country:</label>
                                <input type="text" id="country" name="city" />
                            </div>

                            <div className='shipping-item'>
                                <label htmlFor="zip">Zip</label>
                                <input maxLength={6} type="text" id="zip" name="zip" placeholder="Zip Code" />
                            </div>
                        </div>
                    </div>
                    <hr /> 

                    <form className='payment-form'>
                        <h3 className="heading">Payment Method</h3>
                        <div className="payment-options">
                            <label>
                                <input type="radio" name="paymentMethod" value="debitCard"  />
                                Debit Card
                            </label>

                            <label>
                                <input type="radio" name="paymentMethod" value="cashOnDelivery"  />
                                Cash on Delivery
                            </label>
                        </div>
                    </form>
                    <hr />

                    <button className="checkout-btn" onClick={createOrder} >Continue with payment</button>
                </div>

                <div className='order-summary'>
                    <h3 className="heading">Order Summary</h3>
                    {cartItems.map((item) => (
                        <p className="list" key={item.product.id}>{item.product.name} - {item.product.price} (*{item.quantity})</p>
                    ))}
                    <hr />
                    <h3 className="checkout-total">Total(USD): ${totalPrice}</h3>
                </div>

            </div>

            
        </div>

    )
};
export default Checkout;
