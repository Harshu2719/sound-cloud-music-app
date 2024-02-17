import React, { useState, useEffect, useRef, useCallback } from 'react';
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import AudioPlayByAudioTag from './AudioPlayByAudioTag.js';
import SongProgressbar from './SongProgressbar.js';
import VolumeSlider from './VolumeSlider';
import SetFavoriteSongButton from './SetFavoriteSongButton.js';


const AudioPlayer = ({setPlay, play, song, setIndex, index}) => {
    
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const audioRef = useRef();
    const progressbarRef = useRef();

  const styleAudioPlayer = {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
  }
  return (
    <div style={styleAudioPlayer}>
          <AudioPlayByAudioTag setPlay={setPlay} play={play} setIndex={setIndex} index={index} song={song} audioRef={audioRef} setDuration={setDuration} progressbarRef={progressbarRef} currentTime={currentTime} setCurrentTime={setCurrentTime}/> 
          <SongProgressbar audioRef={audioRef} duration={duration} currentTime={currentTime} progressbarRef={progressbarRef} setCurrentTime={setCurrentTime} />
          < VolumeSlider audioRef={audioRef} /> 
          <SetFavoriteSongButton song={song}/>
    </div>
  )
}

export default AudioPlayer;