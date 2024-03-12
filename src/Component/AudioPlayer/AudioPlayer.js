import React, { useState,useRef, useContext } from 'react';
import AudioPlayByAudioTag from './AudioPlayByAudioTag.js';
import SongProgressbar from './SongProgressbar.js';
import VolumeSlider from './VolumeSlider.js';
import StateContext from '../contexts/StateContext.js';
import SongImageName from './SongImageName.js';



const AudioPlayer = () => {
    
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const audioRef = useRef();
    const progressbarRef = useRef();
    const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext)

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
        <AudioPlayByAudioTag  currentlyPlayingSong={currentSongInfo?.songList[currentSongInfo?.songIndex]} audioRef={audioRef} setDuration={setDuration} progressbarRef={progressbarRef} currentTime={currentTime} setCurrentTime={setCurrentTime}/> 
        <SongProgressbar audioRef={audioRef} duration={duration} currentTime={currentTime} progressbarRef={progressbarRef} setCurrentTime={setCurrentTime} />
        < VolumeSlider audioRef={audioRef} />
        <SongImageName currentlyPlayingSong={currentSongInfo?.songList[currentSongInfo?.songIndex]}/>
      </div>
    </div>
  )
}

export default AudioPlayer;