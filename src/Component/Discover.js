import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import DiscoverSongTypes from './DiscoverSongTypes';

const Discover = ()=> {
    return (
        <>
        <div >
            <Header />
            {/* <DiscoverSongTypes /> */}
            <Outlet />
        </div>
        </>
    )
}

export default Discover;