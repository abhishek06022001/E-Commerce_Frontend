import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    useEffect((id) => {
        async function getProduct() {
            let product = await axios.get(`https://fakestoreapi.com/products/${id}`)
                .then()
                .catch(error => console.log(error.message));
            setTimeout(() => {
                setProduct(product.data);
                setLoading(false);
            }, 1000);
        }
        getProduct();
    }, [id])
    return (
        <div className='min_height w-full flex justify-center items-center p-11 border border-purple-300 ' >
            {loading ?
                <>Loading ...</> :
                <>
                    <div
                        className='card rounded-lg bg-slate-200 h-96 w-60'
                    >
                    </div>
                </>}
        </div>
    )
}

export default ProductDetail