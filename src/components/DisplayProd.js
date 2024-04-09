


import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProd = ( { product } ) => {

    return (
        <div className='h-[400px] w-full  bg-slate-300'>
            <img className=" w-full p-2 h-72 mx-auto     " src={product.img} alt="" />

            <h3>Name : {product.name} </h3>
            <h3>Price : {product.price} </h3>
            <Link to={'cart'}><button className=' bg-yellow-400 px-6 py-3 w-full'>Go To Card </button></Link>
        </div>
    );
};

export default DisplayProd;