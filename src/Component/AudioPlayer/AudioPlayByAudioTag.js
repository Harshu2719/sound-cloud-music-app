import React, { useRef, useState, useEffect, useCallback, useContext} from 'react';
import { VscDebugPause } from "react-icons/vsc";
import { VscDebugStart } from "react-icons/vsc";
import StateContext from '../contexts/StateContext';
import { previousBtnUrl, forwordBtnUrl, playBtnUrl, PauseBtnUrl } from '../constant';



const AudioPlayByAudioTag = ({audioRef, setDuration, progressbarRef, setCurrentTime, duration}) => {
  const playAnimationRef = useRef();
  const [buttonIcon, setButtonIcon] = useState(PauseBtnUrl);
  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);

  const onLoadedMetadata = () => {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      progressbarRef.current.max = seconds
  };

  const repeat = useCallback(() => {
      const currentTimes = audioRef.current?.currentTime;
      setCurrentTime(currentTimes);
      progressbarRef.current.value = currentTimes;
      progressbarRef.current?.style.setProperty(
        '--range-progress',
        `${(progressbarRef.current?.value / duration) * 100}%`
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressbarRef, setCurrentTime]);
  
  const songPlayPause = ()=> {
      if(currentSongInfo?.play) {
          setButtonIcon(playBtnUrl);
          audioRef.current?.play()
          playAnimationRef.current = requestAnimationFrame(repeat);
      } else {
          setButtonIcon(PauseBtnUrl);
          audioRef.current?.pause()
         cancelAnimationFrame(playAnimationRef?.current);
      }
  }
  const lastThreeSong = new Array(3)
  useEffect (()=> {
      songPlayPause();
      // const count
  }, [currentSongInfo?.play, currentSongInfo?.songList[currentSongInfo?.songIndex], repeat])

  const styleBTN = {
    backgroundPosition: '40%',
    backgroundRepeat: 'no-repeat',
    padding: '0',
    marginLeft: '12px',
    width: '24px',
    height: '100%',
    border:'0',
    font: '0/0 a',
    textShadow: 'none',
    color: 'transparent',
    backgroundColor: 'initial',
  }
  const automaticSongChange = (btnStatus)=> {
    if(btnStatus === 'next') {
      if(!currentSongInfo.songList[currentSongInfo.songIndex+1]) {
        setCurrentSongInfo({...currentSongInfo, songIndex: 0})
      } else {
        setCurrentSongInfo({...currentSongInfo, songIndex: currentSongInfo?.songIndex + 1})
      }
    } else {
      if(!currentSongInfo?.songList[currentSongInfo?.songIndex-1]) {
        setCurrentSongInfo({...currentSongInfo, songIndex: currentSongInfo?.songList?.length-1})
      } else {
        setCurrentSongInfo({...currentSongInfo, songIndex: currentSongInfo.songIndex - 1})
      }      
    }
  }
          
  return (
    <div>
        <audio src={currentSongInfo?.songList[currentSongInfo?.songIndex]?.audio_url} ref={audioRef} onLoadedMetadata={onLoadedMetadata} onEnded={()=> {automaticSongChange('next')}}/>
        <button style={{...styleBTN, backgroundImage: previousBtnUrl}} onClick={()=> {automaticSongChange('prev')}}></button>
        <button style={{...styleBTN, backgroundImage: buttonIcon }} onClick={()=> {setCurrentSongInfo({...currentSongInfo, play: !currentSongInfo.play})}}></button>
        <button style={{...styleBTN, backgroundImage: forwordBtnUrl}} onClick={()=> {automaticSongChange('next')}}></button>
    </div>
  )
}

export default AudioPlayByAudioTag