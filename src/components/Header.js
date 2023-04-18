import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    let cartItemCount = storedCartItems.length;
    
    return(
        <div className='header'>
            <h1>Welcome to my Eshop</h1>
            <p>The best online clothing store</p>
            <Link to={"/cart/"}>Cart {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}</Link>
        </div>
    );
}

export default Header;
