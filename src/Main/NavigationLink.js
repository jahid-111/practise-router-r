


    import React from 'react';
import { Link } from 'react-router-dom';
    
    const NavigationLink = () => {
        return (
            <div>
                <h3 className=' text-4xl'>Navigation</h3>
                    <div className=' bg-purple-400 flex justify-center items-center gap-3'>
                        <Link to={"home"}> Home</Link>
                        <Link to={"cart"}> Cart</Link>
                        <Link to={"inventory"}> Inventory</Link>
                        <Link to={"more/products"}> More Products</Link>
                    </div>
            </div>
        );
    };
    
    export default NavigationLink;