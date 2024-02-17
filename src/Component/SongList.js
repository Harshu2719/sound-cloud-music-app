import React, { useState, useEffect } from 'react';
import Song from './Song.js';
import AudioPlayer from './AudioPlayer.js';

const SongList = ({songs}) => {
  const [play, setPlay] = useState(false);
  const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState();
  const [audioPlayerVisibility, setAudioPlayerVisibility] = useState(false);
  const [indexSong, setIndexSong] = useState();


  //const [songUrl, setSongUrl] = useState('https://newton-project-resume-backend.s3.amazonaws.com/audio/64cf907d47ae38c3e33a189a.mp3');
    //console.log(songs)
    const AudioPlayerContainer = {
      display: 'flex', 
      position: 'fixed',
      backgroundColor: 'lightgray',
      height: '55px',
      width: '100%',
      margin: '10px',
      bottom: '0',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#f2f2f2',
      borderTop: '1px solid #cecece'
  }


  return (
      <>
    {songs?.map((song, index) => {  
    return ( 
      <Song index={index} setIndex={setIndexSong} song={song} play={play} setPlay={setPlay} currentlyPlayingSong={songs[indexSong]} setCurrentlyPlayingSong={setCurrentlyPlayingSong} setAudioPlayerVisibility={setAudioPlayerVisibility}/>  
    )
  })}
    {audioPlayerVisibility && <div style={AudioPlayerContainer}><AudioPlayer setPlay={setPlay} play={play} song={songs[indexSong]} setIndex={setIndexSong} index={indexSong} /></div>}
    </>
  )   
}

/* 
songs.map((song) => {  
      return ( 
        <Song song={song} play={play} setPlay={setPlay} currentlyPlayingSong={currentlyPlayingSong} setCurrentlyPlayingSong={setCurrentlyPlayingSong} setAudioPlayerVisibility={setAudioPlayerVisibility}/>  
      )
      }))

      [1,2,3,4,5].map((ele) => {
        return 10; 
      })
      song = {<Song song={song} play={play} setPlay={setPlay} currentlyPlayingSong={currentlyPlayingSong} setCurrentlyPlayingSong={setCurrentlyPlayingSong} setAudioPlayerVisibility={setAudioPlayerVisibility} />}
      [song, {}, {}, {}.....]
      
      */

export default SongList;