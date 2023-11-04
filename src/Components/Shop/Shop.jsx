import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts]= useState([])
    const [cart, setCart]=useState([])


    useEffect(()=>{
        fetch('../../../public/products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    const handleAddToCart=(name)=>{
        const newCart=[...cart, name]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div >
            <h1>products are coming here</h1>
            <div className='products-container'>
            {
                products.map(product=> <Product
                     key={product.id} 
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
            }
            </div>

            </div>
            <div className='cart-container'>
            <p>order list</p>
            <p>selected item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;