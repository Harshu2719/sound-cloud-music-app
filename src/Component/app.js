import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom/client';
import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import FavoriteSongs from './DiscoverPage/FavoriteSongs.js';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import StateContext from './contexts/StateContext.js';
import AudioPlayer from './AudioPlayer/AudioPlayer.js';
import Library from './DiscoverPage/Header/Library.js';
import Discover from './DiscoverPage/Discover.js';
import Profile from './DiscoverPage/Header/Profile.js';
import LandingPageComponent from './LandingPage/LandingPageComponent.js';
import DiscoverSongTypes from './DiscoverPage/DiscoverSongTypes.js';
import UserStateContext from './contexts/UserStateContext.js'
import TrendingHits from './UnUsedComponent/TrendingHits.js';
import SongResultsComponent from './DiscoverPage/SongResultsComponent.js';

const App = ()=> {
    const [currentSongInfo, setCurrentSongInfo] = useState({play: false, songIndex: 0, songList: [], allSongs: [], isAudioPlayerVisible: false, favBtn: false});
    const [userInfo, setUserInfo] = useState({isLoggedIn: localStorage.getItem('isLoggedIn'), name: localStorage.getItem('name'), email: ''})
    return (
        <>
            <UserStateContext.Provider value={{userInfo: userInfo, setUserInfo: setUserInfo}}>
                <StateContext.Provider value={{currentSongInfo: currentSongInfo, setCurrentSongInfo: setCurrentSongInfo}}>
                
                    <Outlet/>
                    {(currentSongInfo.isAudioPlayerVisible) && <AudioPlayer />}
                    
                </StateContext.Provider>
            </ UserStateContext.Provider >
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
                        path: '',
                        element: <DiscoverSongTypes />
                    },
                    {
                        path: 'library',
                        element: <Library />
                    },
                    {
                        path: 'profile',
                        element: <Profile />
                    },
                    
                    {
                        path: 'trendinghits',
                        element: <TrendingHits />
                    }
                    
                   
                ]
            },
            {
                path: '/',
                element: <LandingPageComponent />
            }, 
            {
                path: 'results/:key?/:value?',
                element: <SongResultsComponent />
            },
            {
                path: 'favorites',
                element: <FavoriteSongs />
            },

            //           /harshit/:key/:value
            //           /harshit/mood/romatic
            // {
            //     path: 'discover',
            //     element: <DiscoverSongTypes />
            // }
           

            // {
            //     path: '/search',
            //     element: <SearchedSong />
            // }
        ]
    }
])



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

