import React from 'react'
function ProductItem({ product }) {
    // category
    // "men's clothing"
    // description
    // "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
    // id
    // 1
    // image
    // "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    // price
    // 109.95
    // rating
    // { rate: 3.9, count: 120 }
    // title
    // "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    const { category, description, id, image, price, rating, title } = product;
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
                <button className='bg-blue-500 pl-2 pr-2 pt-1 pb-1 rounded-sm m-1 text-white'>view </button>
                <button className='bg-blue-500 pl-2 pr-2 pt-1 pb-1 rounded-sm m-1 mb-4  text-white'>Add to Cart </button>
            </div>
        </div>

    )
}

export default ProductItem