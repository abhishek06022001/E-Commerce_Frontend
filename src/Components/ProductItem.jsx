import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../features/cart/CartSlice"
import { useNavigate } from 'react-router-dom';
function ProductItem({ product }) {
    const { category, description, id, image, price, rating, title } = product;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const count = useSelector((state) => state.cart.cart.length)
    function SeeProduct(id) {
        navigate(`/${id}`);
    }
    return (
        <div className='h-auto w-72'>
            <div>
                <h1
                    className='text-xl text-blue-950 font-semibold '
                >{product.title}</h1>
            </div>
            <img src={image} alt="" className='h-40 rounded-md w-40' />
            <p
                className='h-28 text-ellipsis text-sm overflow-hidden line-clamp-2'
            >{description}</p>
            <div>
                <button className='bg-blue-500 pl-2 pr-2 pt-1 pb-1 rounded-sm m-1 text-white'
                    onClick={() => SeeProduct(id)}
                >view </button>
                <button className='bg-blue-500 pl-2 pr-2 pt-1 pb-1 rounded-sm m-1 mb-4  text-white'
                    onClick={() => dispatch(addToCart({ id, title, price }))}
                >Add to Cart </button>
            </div>
        </div>
    )
}

export default ProductItem