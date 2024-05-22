import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { GiPauseButton } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";
import StateContext from '../../contexts/StateContext';
import HistorySongContext from '../../contexts/HistoryContext';
import './Song.css'

const Song = ({index, song, songs, recordHistory=true}) => {
  const [isHovering, setIsHovering] = useState(false);
  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);
  const [buttonIcon, setButtonIcon] = useState(GiPlayButton);
  
  let state = {...currentSongInfo};
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

    
    const styleContainerItem  = {
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100%', 
        height: '172.988px', 
        width: '172.988px', 
        position: 'relative',
        backgroundImage: `url(${song?.thumbnail})`,
        }
    
    const handleButtonIcon = () => {
        if((song._id === state.songList[state.songIndex]?._id) && state.play) {
          setButtonIcon(GiPauseButton);
        } else {
          setButtonIcon(GiPlayButton);
        }
    }

    useEffect(()=>{
      handleButtonIcon()
    }, [state.songList[state.songIndex], state.play])

    const handleSetPlay = ()=> {
      if(state.songList[state.songIndex] != song) { 
        state.play = true;
      } else {
        state.play = !state.play;
      }
    }
  const onClickFunction = (e)=> {
    e.preventDefault();
    handleSetPlay()
    handleButtonIcon()
    state.songIndex = index;
    state.isAudioPlayerVisible = true;
    state.songList = songs;
    state.recordHistory = recordHistory;
    setCurrentSongInfo(state);
  }

 
  return songs.length === null ? ( <Shimmer />) : (
    <>
      <div className='box_one'> 
        <Link to={'/results/mood/' +song.mood}>
          <div key={song._id} 
            className='card-item' 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            style={styleContainerItem}>
              {isHovering && 
              <button className='stylePlayButton' 
                onClick={($event)=> {onClickFunction($event)}}>
                  {buttonIcon}
              </button>}       
          </div>
        </Link>
        <div className='styleSongName'>
          {song?.title}
        </div>
        {(song?.artist[0]?.name != null) ? 
        <div className='styleSingerName'>
          <span>{song?.artist.map(ele => {
              return (ele?.name)
            }).join(', ')}
          </span>
        </div> : <div></div>}
      </div> 
    </>
  )
}

export default Song;