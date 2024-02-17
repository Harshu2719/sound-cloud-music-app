import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom/client';
import { useState, useEffect } from 'react';
import {base_URL, project_ID, app_Type} from "./constant.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeroSection from './Nav/HeroSection.js';
import  BasicCard  from './body.js';
import NavScrollExample from './Navbar.js';
import FavoriteSongs from './FavoriteSongs.js';
import SearchInput from './SearchInput.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ExploreTrendingSongs from './ExploreTrendingSongs.js';
import Header from './Header/Header.js';

const FirstPage = ()=> {
    return(
        <>
            <div style={{width: '1240Px', margin: 'auto'}}>
                <HeroSection />
                <SearchInput />
                <BasicCard />
                <ExploreTrendingSongs />
            </div>
        </>
    )
}
const Home = ()=> {
    return (
    <>  
        <Header />
        {/* <NavScrollExample /> */}
        <BasicCard />
        <FavoriteSongs />
        
    </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <FirstPage />
    },
    {
        path: '/Home',
        element: <Home />
    },
    {
        path: '/Favorites',
        element: <FavoriteSongs />
    }
])

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);