import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
        <div className="nav-flex">
            <div className='nav-container'>
                <div className='nav-logo'>
                    <Link className='logo-link' to='/'>Eshop</Link>
                </div>
                <div className='nav-links'>
                    <input type="text" placeholder="Search Items..."></input>
                    <ul>         
                        <li><Link className='cat-link' to="/categories/">Categories</Link></li>
                    </ul>
                    
                    <div>
                    <Link to='/login/'>
                        <button className='login-btn'>
                            Login
                        </button>
                    </Link> 
                    </div>
                </div>
            </div>
        </div>
  )
}

export default NavBar