import React, { useState,useRef, useContext, useEffect } from 'react';
import AudioPlayByAudioTag from './AudioPlayByAudioTag.js';
import SongProgressbar from './SongProgressbar.js';
import VolumeSlider from './VolumeSlider.js';
import StateContext from '../contexts/StateContext.js';
import SongImageName from './SongImageName.js';
import HistorySongContext from '../contexts/HistoryContext.js';
import UserStateContext from '../contexts/UserStateContext.js';
import FavouriteSongContext from '../contexts/FavouriteSongContext.js';



const AudioPlayer = () => {
    
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const audioRef = useRef();
    const progressbarRef = useRef();
    const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext)
    const {historySong, setHistorySong} = useContext(HistorySongContext);
    const contextState = {...historySong}
    const currentSong = currentSongInfo?.songList[currentSongInfo?.songIndex]
    const {userInfo, setUserInfo} = useContext(UserStateContext);
    


    
    useEffect(()=>{
      if(currentSongInfo.recordHistory && userInfo.isLoggedIn) {
        const isSongThere = contextState?.historySongList?.indexOf(currentSong);
        if(isSongThere === -1) {
          contextState?.historySongList?.unshift(currentSong);
          setHistorySong(contextState);
        } else {
          contextState?.historySongList?.splice(isSongThere, 1);
          contextState?.historySongList?.unshift(currentSong);
          setHistorySong(contextState);
        }
      }  
    }, [currentSong])
 
  const styleAudioPlayer = {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    alignItems: 'center',
    width: '1240px'
  }
  const AudioPlayerContainer = {
    display: 'flex', 
    justifyContent: 'center',
    position: 'fixed',
    backgroundColor: 'lightgray',
    height: '55px',
    width: '100%',
    margin: '10px',
    bottom: '0',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f2f2f2',
    borderTop: '1px solid #cecece',
    marginBottom: '0px',
    zIndex: '10'

}
  return (
    <div style={AudioPlayerContainer}>
      <div style={styleAudioPlayer}>
        <AudioPlayByAudioTag  audioRef={audioRef} 
          setDuration={setDuration} 
          progressbarRef={progressbarRef} 
          currentTime={currentTime} 
          setCurrentTime={setCurrentTime}
        /> 
        <SongProgressbar audioRef={audioRef} 
          duration={duration} 
          currentTime={currentTime} 
          progressbarRef={progressbarRef} 
          setCurrentTime={setCurrentTime} 
        />
        < VolumeSlider audioRef={audioRef} />
        <SongImageName currentlyPlayingSong={currentSongInfo?.songList[currentSongInfo?.songIndex]}/>
      </div>
    </div>
  )
}

export default AudioPlayer;