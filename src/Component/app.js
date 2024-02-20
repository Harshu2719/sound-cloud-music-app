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
import  BasicCard  from './SongsFromAPI/body.js';
import NavScrollExample from './UnUsedComponent/Navbar.js';
import FavoriteSongs from './FavoriteSongs.js';
import SearchInput from './SearchSong/SearchInput.js'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ExploreTrendingSongs from './ExploreTrendingSongsBtn.js';
import Header from './Header/Header.js';
import StateContext from './contexts/StateContext.js';
import AudioPlayer from './AudioPlayer/AudioPlayer.js';
import Library from './Header/Library.js';
import Discover from './Discover.js';
import Profile from './Header/Profile.js';
import LandingPageComponent from './LandingPageComponent.js';

const App = ()=> {
    const [currentSongInfo, setCurrentSongInfo] = useState({play: false, songIndex: 0, songList: [], isAudioPlayerVisible: false});
    return (
        <>
            <StateContext.Provider value={{currentSongInfo: currentSongInfo, setCurrentSongInfo: setCurrentSongInfo}}>
                <Outlet/>
                {(currentSongInfo.isAudioPlayerVisible) && <AudioPlayer />}
            </StateContext.Provider>
        </>
    )
}



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [

            {
                path: 'discover',
                element: <Discover />,
                children: [
                    {
                        path: 'favorites',
                        element: <FavoriteSongs />
                    },
                    {
                        path: 'library',
                        element: <Library />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                ]
            },
            {
                path: '/',
                element: <LandingPageComponent />
            },

            // {
            //     path: '/search',
            //     element: <SearchedSong />
            // }
        ]
    }
])



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

