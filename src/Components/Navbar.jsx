import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
    return (
        <div className='bg-customBlue h-auto p-3 text-white flex justify-evenly '>
            <span>
                <h1
                    className='font-bold text-3xl'
                >Flipkart</h1>
            </span>

            <span className='flex gap-5 items-center' >
                <input type="text" placeholder='Search for products, brands and more' className='p-2 rounded-sm  w-96
                text-black
                ' />
                <FaShoppingCart />
                <strong>Cart</strong>


            </span>
        </div>
    )
}

export default Navbar