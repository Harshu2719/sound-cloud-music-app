import React, { useState, useEffect } from 'react';
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";


const Song = ({index, setIndex, song, setPlay, play, currentlyPlayingSong, setAudioPlayerVisibility}) => {

  const [isHovering, setIsHovering] = useState(false);

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
        if((song._id === currentlyPlayingSong?._id) && play) {
          setButtonIcon(VscDebugPause);
        } else {
          setButtonIcon(VscDebugStart);
        }
    }

    useEffect(()=>{
        handleButtonIcon()
    }, [currentlyPlayingSong, play])

    const handleSetPlay = ()=> {
      if(currentlyPlayingSong != song) { 
        setPlay(true)
      } else {
        setPlay(!play)
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
    setIndex(index);
  }

 
  return (
    <>
    <div style={{border: 'none', width: '180px', margin: '10px', borderRadius: '5px'}}>
      <div key={song._id} className='card-item' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={styleContainerItem}>
        {isHovering && <button style={buttonStyle} onClick={()=> {onClickFunction()}}>{buttonIcon}</button>}       
      </div>
      <div style={{...styleSingers, fontSize: '15px', fontWeight: '600'}}>{song?.title}</div>
      <div style={styleSingers}>{song?.artist.map(ele => {
        return (<span >{ele?.name + ", "} </span>)
      })}
      </div>
    </div> 
    </>
  )
}

export default Song;