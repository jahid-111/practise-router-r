

import {useLoaderData} from "react-router-dom"

import React from 'react';
import DisplayProd from "../components/DisplayProd";

const ProductsAbout = () => {

    const getData = JSON.parse(useLoaderData());
    console.log(getData)
    return (

        <div>
            <h2> Total Products :{getData.length}</h2>

            <div className=" grid md:grid-cols-4 justify-center items-center gap-3">
              {
                getData.map(product => <DisplayProd
                    key={product.id}
                    product = {product}
                ></DisplayProd>)
              }
            </div>

        </div>

    );
};

export default ProductsAbout;