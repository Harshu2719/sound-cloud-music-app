import React, { useState, useEffect, useContext } from 'react';
import Song from './Song.js';
import AudioPlayer from '../AudioPlayer/AudioPlayer.js';
import createContext from 'react';
import SongListContext from '../contexts/StateContext.js';
import StateContext from '../contexts/StateContext.js';
import Shimmer from './Shimmer.js';

const SongList = ({songs}) => {
  // const [play, setPlay] = useState(false);


  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);
  
  // const setSongList = ()=> {
  //   // setTimeout(() => {
  //     setCurrentSongInfo({...currentSongInfo, songList:songs})
  //   // }, 10);
  // }
  return (
    <>
      <div style={{width: '1240px'}}>       
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {songs?.length === 0 ? <Shimmer /> : 
          songs?.map((song, index) => {  
          return (  
            <Song index={index} 
            song={song}
            songs={songs}  
           />  
          )})
        }</div>
      </div>
    </>
  )   
}


export default SongList;