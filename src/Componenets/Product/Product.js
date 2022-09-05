import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
  const {product,handleClick}=props
    const {name,img,price,seller,ratings}=props.product;

    console.log(props)
    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p>
          <p>Price:${price}</p>
          <p><small>Brand:{seller}</small></p>
          <p><small>Ratings:{ratings} Stars</small></p>
          </div>
          <button onClick={()=>handleClick(product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;