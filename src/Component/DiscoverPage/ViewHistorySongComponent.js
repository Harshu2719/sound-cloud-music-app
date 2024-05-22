import React, { useContext } from 'react'
import HistorySongContext from '../contexts/HistoryContext'
import SongList from './SongsFromAPI/SongList';
import Header from './Header/Header';
import './ViewHistorySongComponent.css';

const ViewHistorySongComponent = () => {
    const {historySong, setHistorySong} = useContext(HistorySongContext);
  return (
    <>
        <Header />
        <div className='main_div'>
            <h3 className='recently_played_song_heaading'>Recently played:</h3>
            <SongList songs={historySong.historySongList} recordHistory={false} />
        </div>
    </>
  )
}

export default ViewHistorySongComponent;