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
    const styleTime = {
      width: '50px',
      height: '46px',
      color: '#f50',
      textAlign: 'right',
      lineHeight: '46px',
      fontSize: '12px',
      paddingRight: '10px'
    }
    const styleProgressbar = {
      backgroundColor: 'rgba(240, 9, 9, 0.397)',
      width: '500px',
      cursor: 'pointer',
      margin:' 0 auto',
    }
  return (
    <div style={{display: 'flex', width: '600px'}}>
      <span style={styleTime}>{formatTime(currentTime)}</span>
      <input style={styleProgressbar} type='range' ref={progressbarRef} onChange={handle} defaultValue={0}/>
      <span style={styleTime}>{formatTime(duration)}</span>
    </div>
  )
}

export default SongProgressbar;