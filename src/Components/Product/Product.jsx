import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {name, img, price,ratings, category,seller, id }=props.product
    console.log(props.product)

   const handleAddToCart =props.handleAddToCart
    return (
        <div className='product' >
            <img style={{width:"286px", height:"286px"}} src={img}></img>
            <div className='product-info'>
                <h6>Name : {name}</h6>
                <p> price : ${price} </p>
                <p>ManuFacture : {seller}</p>
                <p> <small> Ratings : {ratings} star</small></p>
            </div>
            <button onClick={()=>handleAddToCart(name)}> Add to card <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};

export default Product;