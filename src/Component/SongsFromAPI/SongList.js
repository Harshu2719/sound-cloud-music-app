import React, { useState, useEffect, useContext } from 'react';
import Song from './Song.js';
import AudioPlayer from '../AudioPlayer/AudioPlayer.js';
import createContext from 'react';
import SongListContext from '../contexts/StateContext.js';
import StateContext from '../contexts/StateContext.js';

const SongList = ({songs}) => {
  // const [play, setPlay] = useState(false);
  const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState();
  const [audioPlayerVisibility, setAudioPlayerVisibility] = useState(false);
 

  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);
  const styleHeading = {
    fontSize: '24px',
    textAlign: 'center',
    paddingTop: '20px',
    marginBottom: '30px',
    fontFamily: 'Inter,sans-serif',
    fontWeight: 'bolder',
    color: '#333',
 }

  return (
    <>
      <div style={{width: '1240px'}}>
        <div style={styleHeading}>Hear what’s trending for free in the SoundCloud community</div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>{songs?.map((song, index) => {  
          return (  
            <Song index={index} 
            song={song} 
            currentlyPlayingSong={songs[currentSongInfo.songIndex]} 
            setCurrentlyPlayingSong={setCurrentlyPlayingSong} 
            setAudioPlayerVisibility={setAudioPlayerVisibility}/>  
          )})
        }</div>
      </div>
    </>
  )   
}


export default SongList;