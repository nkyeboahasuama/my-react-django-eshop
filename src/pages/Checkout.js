
const Checkout = (props) => {
    return (
        <div>
            <h2 className="checkout-title">Checkout Form</h2>
            <div className='checkout'>

                <form className='shipping-form'>
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

                    <button className="checkout-btn">Continue to Checkout</button>
                </form>

                <div className='order-summary'>
                    <h3 className="heading">Order Summary</h3>
                    {props.cartItems.map((item,index) => (
                        <p className="list" key={index}>{item.name} -   {item.price} (*{item.quantity})</p>
                    ))}
                    <hr />
                    <h3 className="checkout-total">Total(USD): ${props.totalPrice.toFixed(2)}</h3>
                </div>

            </div>

            
        </div>

    )
};
export default Checkout;
