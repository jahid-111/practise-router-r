


import React from 'react';
import NavigationLink from './NavigationLink';
import { Outlet } from "react-router-dom"
const MainPage = () => {
    return (
        <div>
            <NavigationLink></NavigationLink>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;