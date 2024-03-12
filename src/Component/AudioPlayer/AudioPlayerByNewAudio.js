import React, { useState, useEffect } from 'react';
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";

const AudioPlayerByNewAudio = ({setPlay, play, song, setIndex, index}) => {
    const [player] = useState(new Audio(song?.audio_url));
    const [buttonIcon, setButtonIcon] = useState(VscDebugStart);


    useEffect(()=> {
        player.setAttribute('src', song?.audio_url);
    }, [song])

  const songPlayPause = ()=> {
    if(play) {
        setButtonIcon(VscDebugPause);
        player.play();
    } else {
        setButtonIcon(VscDebugStart);
       player.pause();
    }
}
useEffect (()=> {
    songPlayPause();
}, [play, song])

  return (
    <div>
        <button onClick={()=> {setIndex(index-1)}}>Pachhe</button>
        <button onClick={()=> {setPlay(!play)}}>{buttonIcon}</button>
        <button onClick={()=> {setIndex(index+1)}}>Aange</button>
    </div>
  )
}

export default AudioPlayerByNewAudio