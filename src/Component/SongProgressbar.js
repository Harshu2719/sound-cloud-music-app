import React from 'react'

const SongProgressbar = ({duration, currentTime, progressbarRef, audioRef}) => {

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

    const handle = ()=> {
      console.log(currentTime)
      audioRef.current.currentTime = progressbarRef.current.value
    }
  return (
    <div>
      <span>{formatTime(currentTime)}</span>
      <input type='range' ref={progressbarRef} onChange={handle} defaultValue={0}/>
      <span>{formatTime(duration)}</span>
    </div>
  )
}

export default SongProgressbar;