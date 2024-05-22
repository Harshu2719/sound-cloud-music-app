import  React, { useContext, useEffect, useState } from 'react';
import SongList from '../../DiscoverPage/SongsFromAPI/SongList.js';
import StateContext from '../../contexts/StateContext';
import './LandingPageSong.css';


const LandingPageSong = () => {
  const [songs, setSongs] = useState([]);  
  const [topSong, setTopSong] = useState([]);

  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);
  const state = {...currentSongInfo}
 
   async function authentication () {
    const response = await fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured": "Trending songs"}&limit=15', {
      method: 'GET',
      headers: {
        'projectID': 'f104bi07c490',
      }
    }) 
    const data = await response.json();   
    setSongs(data.data);
    // state.songList = data.data
    setCurrentSongInfo(state)
    
    // console.log(songs)
  }

  useEffect (()=> {
    authentication()
    //console.log(state)
  }, [])

  
 
  useEffect(()=>{
    songs?.map(obj => {
        if(obj.featured === 'Trending songs') {
          return (
            setTopSong([...topSong, {
              image: obj.thumbnail,
              title: obj.title,
              featured: obj.featured
            }])
          )
        }
    })
  }, [])
  //console.log(topSong)
  
  return (
    <>
    <div className='card-container'>
    <div className='styleHeading' >Hear what’s trending for free in the SoundCloud community</div>
      < SongList songs={songs} />
    </div>
    </>
  )
}

export default LandingPageSong;