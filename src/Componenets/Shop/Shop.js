import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        console.log('product load before fetch')
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            console.log('product loaded')
        });
            
    },[]);

    useEffect(()=>{
        console.log('local storage first line')
        const storedCart=getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        console.log('local storage finished')
    },[products])

    const handleClick=(selectedProduct)=>{
        const exist=cart.find(product=>product.id===selectedProduct.id);
        let newCart=[];
        if(!exist){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct];
        }
        else{
            const rest=cart.filter(product=>product.id !==selectedProduct.id);
            exist.quantity=exist.quantity+1;
            newCart=[...rest,exist];
        }
       
        setCart(newCart);
        addToDb(selectedProduct.id);
      }

    return (
        <div className='shop-container'>
           <div className="product-container">
            {
                products.map(product=><Product 
                key={product.id}
                product={product}
                handleClick={handleClick}
                ></Product>)
            }
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;