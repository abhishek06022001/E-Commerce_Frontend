import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductItem from './Components/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
function MainPage() {
    // const [products, setProducts] = useState();
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     async function getProducts() {
    //         let products = await axios.get('https://fakestoreapi.com/products')
    //             .then()
    //             .catch(error => console.log(error.message));
    //         setTimeout(() => {
    //             setProducts(products.data);
    //             setLoading(false);
    //         }, 1000);
    //     }
    //     getProducts();
    // }, []);
    
    const products = useSelector((state) => state.product.filteredProducts);

    const loading = useSelector((state) => state.product.loading);
    return (
        <div className='h-full flex flex-col'>
            {loading ? <>
                <div
                    className='flex justify-center items-center h-96'
                >
                    <svg width="90" height="90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <circle cx="50" cy="50" r="35" stroke="#2874F0" stroke-width="4" stroke-linecap="round" stroke-dasharray="164" stroke-dashoffset="164">
                            <animate attributeName="stroke-dashoffset" from="120" to="0" dur="1s" repeatCount="indefinite" />
                            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            </> :
                <div className='grid grid-cols-3 gap-4 p-7 ' >
                    {products.map(product => {
                        return <div
                            className='border flex justify-center '
                        >
                            <ProductItem
                                product={product} />
                        </div>
                    })}

                </div>
            }
        </div>
    )
}
export default MainPage