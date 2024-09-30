import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from "../features/cart/CartSlice"

function ProductDetail() {
    const { id } = useParams();
    console.log("id is ", id);

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getProduct() {
            let product = await fetch('https://fakestoreapi.com/products/' + id)
                .then(res => res.json());
            console.log("The product is", product);
            setTimeout(() => {
                setProduct(product);
                setLoading(false);
            }, 1000);
        }
        getProduct();
    }, [id])
    return (
        <div
            className=' shadow-2xl h-96 w-1/2  flex '
        >
            {loading ? <>Loading ...</> :
                <>
                    <div className="left w-1/2 flex justify-center items-center">
                        <img src={product.image} alt="" className='w-1/2' />
                    </div>
                    <div className="right w-1/2 flex flex-col justify-center ">
                        <h1 className='text-slate-600 text-2xl font-bold element' >{product.title}</h1>
                        <p>{product.description}</p>
                        <h3 className='text-slate-600 text-lg font-semibold element' >{product.category}</h3>
                        <p>Price : ${product.price}</p>
                        <h3 className='text-slate-600 text-lg font-semibold element' >{product.rating.rate} / 5 </h3>
                        <button className='bg-blue-500 pl-2 pr-2 pt-1 pb-1 rounded-sm m-1 mb-4 max-w-fit  text-white'
                            onClick={() => dispatch(addToCart({ id: product.id, title: product.title, price: product.price }))}
                        >Add to Cart </button>
                    </div>
                </>}
        </div>
    )
}

export default ProductDetail