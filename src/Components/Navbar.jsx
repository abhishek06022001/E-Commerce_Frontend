import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Modal from './Modal';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false)
    const count = useSelector((state) => state.cart.cart.length);
    const cart = useSelector((state) => state.cart.cart);
    return (
        <div className='min-h-screen flex flex-col' >
            <div className='bg-customBlue h-auto p-3 text-white flex justify-evenly relative '>
                <span>
                    <Link to={'/'}  >
                        <h1
                            className='font-bold text-3xl'
                        >Flipkart</h1>
                    </Link>

                </span>
                <span className='flex gap-5 items-center' >
                    <input type="text" placeholder='Search for products, brands and more' className='p-2 rounded-sm  w-96
                text-black
                ' />
                    <FaShoppingCart
                        onClick={() => setOpen(true)}
                        className='h-6 w-10'
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
            <div className="flex-1">
                <Outlet />
            </div>

        </div>



    )
}
export default Navbar