import React, { useRef, useState, useEffect, useCallback} from 'react';
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";


const AudioPlayByAudioTag = ({setPlay, play, song, setIndex, index, audioRef, setDuration, progressbarRef, setCurrentTime, duration}) => {
  const playAnimationRef = useRef();
  const [buttonIcon, setButtonIcon] = useState(VscDebugStart);

  const onLoadedMetadata = () => {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      progressbarRef.current.max = seconds
  };

  const repeat = useCallback(() => {
      const currentTimes = audioRef.current.currentTime;
      //console.log(currentTimes)
      setCurrentTime(currentTimes);
      progressbarRef.current.value = currentTimes;
      progressbarRef.current.style.setProperty(
        '--range-progress',
        `${(progressbarRef.current.value / duration) * 100}%`
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressbarRef, setCurrentTime]);
  
  const songPlayPause = ()=> {
      if(play) {
          setButtonIcon(VscDebugPause);
          audioRef.current.play()
          playAnimationRef.current = requestAnimationFrame(repeat);
      } else {
          setButtonIcon(VscDebugStart);
          audioRef.current.pause()
         cancelAnimationFrame(playAnimationRef.current);
      }
  }
  useEffect (()=> {
      songPlayPause();
  }, [play, song, repeat])

  return (
    <div>
        <audio src={song?.audio_url} ref={audioRef} onLoadedMetadata={onLoadedMetadata} onEnded={()=> {setIndex(index+1)}}/>
        <button onClick={()=> {setIndex(index-1)}}>Pachhe</button>
        <button onClick={()=> {setPlay(!play)}}>{buttonIcon}</button>
        <button onClick={()=> {setIndex(index+1)}}>Aange</button>
    </div>
  )
}

export default AudioPlayByAudioTag