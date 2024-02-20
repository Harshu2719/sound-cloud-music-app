import React, { useState, useEffect, useContext } from 'react';
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import StateContext from '../contexts/StateContext';


const Song = ({index, song, currentlyPlayingSong, setAudioPlayerVisibility}) => {

  const [isHovering, setIsHovering] = useState(false);
  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);

  let state = {...currentSongInfo};
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

    //console.log(currentlyPlayingSong);
    const [buttonIcon, setButtonIcon] = useState(VscDebugStart);
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
        backgroundColor: 'darkgray'
    }
    const handleButtonIcon = () => {
      //console.log(play);
        if((song._id === currentlyPlayingSong?._id) && state.play) {
          setButtonIcon(VscDebugPause);
        } else {
          setButtonIcon(VscDebugStart);
        }
    }

    useEffect(()=>{
        handleButtonIcon()
    }, [currentlyPlayingSong, state.play])

    const handleSetPlay = ()=> {
      if(currentlyPlayingSong != song) { 
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
  const onClickFunction = ()=> {
    setAudioPlayerVisibility(true)
    handleSetPlay()
    handleButtonIcon()
    state.songIndex = index;
    state.isAudioPlayerVisible = true;
    setCurrentSongInfo(state);
    //console.log(currentSongInfo.song)
  }

  //console.log(useContext(StateContext), 'sfvbsnbsrzgdrsh')

 
  return (
    <>
    <div style={{border: 'none', width: '180px', margin: '10px', borderRadius: '5px', height: '258px'}}> 
      <div key={song._id} className='card-item' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styleContainerItem}>
        {isHovering && <button style={buttonStyle} onClick={()=> {onClickFunction()}}>{buttonIcon}</button>}       
      </div>
      <div style={{...styleSingers, fontSize: '15px', fontWeight: '600'}}>{song?.title}</div>
      <div style={styleSingers}><span >{song?.artist.map(ele => {
        return (ele?.name)
      }).join(', ')}</span>
      </div>
    </div>  
    </>
  )
}

export default Song;