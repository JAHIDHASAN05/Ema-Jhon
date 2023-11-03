import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo}></img>
            <div>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/Login">Log in</a>
                <a href="About">About</a>
            </div>
        </div>
    );
};

export default Header;