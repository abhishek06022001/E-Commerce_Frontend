import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import { Link, Outlet } from 'react-router-dom';
import { fetchProducts, filterProducts } from '../features/product/ProductSlice'

function Navbar() {
    const [open, setOpen] = useState(false)
    const count = useSelector((state) => state.cart.cart.length);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const handleChange = (e) => {
        console.log(e.target.value);
        dispatch(filterProducts({ txt: e.target.value }));
    }
    return (
        <div className='min-h-screen h-auto flex flex-col ' >
            <div className='bg-customBlue h-auto p-3 text-white flex justify-evenly relative'>
                <span>
                    <Link to={'/'}  >
                        <h1
                            className='font-bold text-3xl'
                        >Flipkart</h1>
                    </Link>

                </span>
                <span className='flex gap-5 items-center' >
                    <input type="text" placeholder='Search for products' className='p-2 rounded-sm  w-96
                text-black
                
                '
                        onChange={(e) => { handleChange(e) }}

                    />
                    <FaShoppingCart
                        onClick={() => setOpen(true)}
                        className='h-6 w-10 '
                    />
                    <h1
                        className='bg-stone-900 p-1 text-xs-low rounded-full relative right-9 bottom-3'>{count}</h1>
                    <strong>Cart</strong>
                </span>
                {open ?
                    <div
                        className='fixed  min-h-screen min-w-full flex justify-center items-center
                    top-0
                    bg-slate-900 bg-opacity-50
                    z-10
                    '
                    >
                        <Modal cart={cart} setOpen={setOpen} />
                    </div>
                    :
                    null
                }
            </div>
            <div className="flex-1 flex justify-center  items-center">
                <Outlet />
            </div>



        </div>



    )
}
export default Navbar