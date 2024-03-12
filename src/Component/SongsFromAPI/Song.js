import React, { useState, useEffect, useContext } from 'react';
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import StateContext from '../contexts/StateContext';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import { SongCardPauseButtonIcon, SongCardPlayButtonIcon } from '../constant';
import { GiPauseButton } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";


const Song = ({index, song, songs}) => {

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

    //console.log(currentlyPlayingSong);
    
    const styleContainerItem  = {
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100%', 
        height: '179.988px', 
        width: '179.988px', 
        position: 'relative',
        backgroundImage: `url(${song?.thumbnail})`,
        }
    
      const buttonStyle = {
        position: 'absolute',
        left: '34%',
        top: '34%',
        right: '34%',
        bottom: '34%',
        borderRadius: '100%',
        border: 'none',
        backgroundColor: '#f30',
        // backgroundImage: {buttonIcon},
        backgroundRepeat: 'no-repeat',
        transition: 'opacity .3s',
        opacity: '1'
    }
    const handleButtonIcon = () => {
      //console.log(play);
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
        // setCurrentSongInfo({...currentSongInfo, play: true, songIndex: index})
      } else {
        state.play = !state.play;
        // setCurrentSongInfo({...currentSongInfo, play: !currentSongInfo.play, songIndex: index})
      }
    }
    const styleSingers = {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBeak: 'normal',
      panadding: '0px', 
      margin: '0px', 
      fontSize: '14px', 
      lineHeight: '1.5',
      display: 'flex',
      flexWrap: 'wrap',
      fontWeight: '100'
  }
  const onClickFunction = (e)=> {
    console.log(e);
    e.preventDefault();
    // e.stopPropagation();
    // e.stopImmidiatePropagation();
    handleSetPlay()
    handleButtonIcon()
    state.songIndex = index;
    state.isAudioPlayerVisible = true;
    state.songList = songs;
    setCurrentSongInfo(state);
    //console.log(currentSongInfo.song)
  }

  //console.log(useContext(StateContext), 'sfvbsnbsrzgdrsh')
  
 
  return songs.length === null ? ( <Shimmer />) : (
    <>
    <div style={{border: 'none', width: '180px', margin: '10px', borderRadius: '5px', height: '258px'}}> 
      <Link to={'/results/mood/' +song.mood} ><div key={song._id} className='card-item' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styleContainerItem}>
        {isHovering && <button style={buttonStyle} onClick={($event)=> {onClickFunction($event)}}>{buttonIcon}</button>}       
      </div></Link>
      <div style={{...styleSingers, fontSize: '15px', fontWeight: '600'}}>{song?.title}</div>
      {(song?.artist[0]?.name != null) ? <div style={styleSingers}><span >{song?.artist.map(ele => {
        return (ele?.name)
      }).join(', ')}</span>
      </div> : <div></div>}
    </div> 
    </>
  )
}

export default Song;