

import React from 'react';

const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center h-screen bg-red-100 p-2'>
           
            <div className=' p-32 rounded-md  bg-yellow-300'>
                <h4 className=' font-bold text-red-600 text-6xl'>404</h4>
                <h6 className=' text-3xl  font-semibold' >Page !Found</h6>
            </div>

        </div>
    );
};

export default Error;