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
import Discover from './DiscoverPage/Discover.js';
import LandingPageComponent from './LandingPage/LandingPageComponents/LandingPageComponent.js';
import DiscoverSongTypes from './DiscoverPage/DiscoverSongTypes.js';
import UserStateContext from './contexts/UserStateContext.js'
import TrendingHits from './UnUsedComponent/TrendingHits.js';
import SongResultsComponent from './DiscoverPage/SongResultsComponent.js';
import HistorySongContext from './contexts/HistoryContext.js';
import CommingSoonComponent from './DiscoverPage/CommingSoonComponent.js';
import ViewHistorySongComponent from './DiscoverPage/ViewHistorySongComponent.js';
import FavouriteSongContext from './contexts/FavouriteSongContext.js';
import ProfilePageComponent from './DiscoverPage/ProfilePageComponent.js';

const App = ()=> {
    const [currentSongInfo, setCurrentSongInfo] = useState({play: false, songIndex: 0, songList: [], allSongs: [], isAudioPlayerVisible: false, favBtn: false, recordHistory: true});
    const [userInfo, setUserInfo] = useState({isLoggedIn: localStorage.getItem('isLoggedIn'), name: localStorage.getItem('name'), email: ''})
    const [historySong, setHistorySong] = useState(JSON.parse(localStorage.getItem('historySong')) || {historySongList: [], songIndex: 0});
    const [favourites, setFavourites] = useState({favouritesSongList: [], favouritesButtonColor: 'Black' });
    const historySongUpdate = (historySongObect)=> {
        localStorage.setItem('historySong', JSON.stringify(historySongObect))
        setHistorySong(historySongObect);
    }
   
    return (
        <>       
            <HistorySongContext.Provider value={{historySong: historySong, setHistorySong: historySongUpdate}}>
                <UserStateContext.Provider value={{userInfo: userInfo, setUserInfo: setUserInfo}}>
                    <StateContext.Provider value={{currentSongInfo: currentSongInfo, setCurrentSongInfo: setCurrentSongInfo}}>
                        <FavouriteSongContext.Provider value={{favourites: favourites, setFavourites: setFavourites}}>
                            <Outlet/>
                            {(currentSongInfo.isAudioPlayerVisible) && <AudioPlayer />}
                        </ FavouriteSongContext.Provider>
                    </ StateContext.Provider>
                </ UserStateContext.Provider>
            </ HistorySongContext.Provider>
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
                        path: 'trendinghits',
                        element: <TrendingHits />
                    },
                   
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
            {
                path: 'library',
                element: <CommingSoonComponent />
            },
            {
                path: 'mail',
                element: <CommingSoonComponent />
            },
            {
                path: 'notification',
                element: <CommingSoonComponent />
            },
            {
                path: 'upload',
                element: <CommingSoonComponent />
            },
            {
                path: 'forartist',
                element: <CommingSoonComponent />
            },
            {
                path: 'trynextpro',
                element: <CommingSoonComponent />
            },
            {
                path: 'history',
                element: <ViewHistorySongComponent />
            },
            {
                path: 'language',
                element: <CommingSoonComponent />
            },
            {
                path: 'profile',
                element: <ProfilePageComponent />,
                children: [
                    {
                        path: 'popular-tracks',
                        element: <ProfilePageComponent />
                    },
                    {
                        path: 'tracks',
                        element: <ProfilePageComponent />
                    },
                    {
                        path: 'albums',
                        element: <ProfilePageComponent />
                    },
                    {
                        path: 'playlists',
                        element: <ProfilePageComponent />
                    },
                    {
                        path: 'reports',
                        element: <ProfilePageComponent />
                    },
                ]
            },

        ]
    }
])



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

