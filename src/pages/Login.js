import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';

    const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [token, setToken] = useState(localStorage.getItem('token'));
        const [cartData, setCartData] = useState([])


        const handleLogin = async (event) => {
            event.preventDefault();
            console.log('Logging in user');
            console.log(cartData.user)

            try {
                const response = await fetch('/api/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                });

                if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                localStorage.setItem('token', data.token);
                } 
                else if (response.status === 401) {
                const data = await response.json();
                alert(data.error);
                } 
                else {
                console.error('Login failed');
                }
            } 
            catch (error) {
                console.error(error);
            }
        };

        useEffect(() => {
            const fetchCartData = async () => {
                try {
                    const cartResponse = await fetch('/api/orders/', {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                    });

                    if (cartResponse.ok) {
                    const cart = await cartResponse.json();
                    setCartData(cart.orders[0].items);
                    console.log(cart.orders[0].items)
                    console.log('cartdata:',cartData)
                    } 
                    
                    else {
                    console.error('Unable to fetch cart items');
                    }
                } 
                
                catch (error) {
                    console.error(error);
                }
            };
        fetchCartData();
        }, [token]);

        const handleLogout = () => {
            setToken(null);
            localStorage.removeItem('token'); // remove token from local storage
        };

        useEffect(() => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
                
            }
        }, []);

    return (
        <div className='login'>
            {token ? ( 
                <>
                    <p>Welcome, you are logged in!</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : ( // show login form if token is not present
                <div className='login-container'>
                    <form className='login-form' onSubmit={handleLogin}>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />

                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <button type='submit'>Login</button>

                        <p>Don't have an account yet?<Link to="/">Sign up</Link></p>
                    </form>
                </div>
            )}
            
            <p>
                {cartData.map((item) => (
                    <li key={item.product.id}>{item.product.name}</li>
                ))}
            </p>
        </div>
    );
};

export default Login;
