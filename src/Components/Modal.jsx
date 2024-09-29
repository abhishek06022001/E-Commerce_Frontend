import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cart/CartSlice';
function Modal({ cart, setOpen, open }) {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const stored_cart = useSelector((state) => state.cart.cart);
    console.log("stored_cart is", stored_cart);
    useEffect(() => {
        let sum = 0;
        stored_cart.forEach(product => {
            sum += product.price * product.quantity;
        });
        setTotal(sum);
        setProducts([...stored_cart]);
    }, [cart]);
    return (
        <div className='bg-white min-h-64  h-auto w-2/4 rounded-md  flex  p-4 max-h-96 items-center z-20  
       text-cyan-800 relative'  >
            <button className='bg-red-500 absolute h-7 w-7 top-0 left-0 flex justify-center items-center text-white'
                onClick={() => setOpen(false)}
            >X</button>
            <div className='relative w-full  m-3 h-auto ' >
                {(products.length > 0) ? <div className='flex  flex-col w-full'  >
                    {products.map((product) => {
                        return <div >
                            <div
                                className='border border-solid flex justify-between '    >
                                <div className='text-xl font-semibold  w-80 '>
                                    {product.title}
                                    <div>
                                        Price : ${product.price}
                                    </div>
                                </div>
                                <div className='flex' >
                                    <button className='bg-red-950 w-6 h-6 flex justify-center items-center text-white rounded-full'
                                        onClick={() => dispatch(addToCart({ id: product.id, title: product.title, price: product.price }))}
                                    >+</button>
                                    <span>Quantity: {product.quantity}</span>
                                    <button className='bg-red-950 w-6 h-6 flex justify-center items-center text-white rounded-full'
                                        onClick={() => dispatch(removeFromCart({ id: product.id }))}
                                    >-</button>
                                </div>
                            </div>
                        </div>
                    })}
                    <h1>Total amount  ${total}</h1>
                </div> : <h1 className='text-2xl font-semibold'>The Cart is Empty </h1>
                }
            </div>
        </div>

    )
}

export default Modal