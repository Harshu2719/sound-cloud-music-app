import  React, { useContext, useEffect, useState } from 'react';
import {base_URL} from '../constant.js';
import SongList from './SongList.js';
import NewReleaseSong from './NewReleaseSong.js';
import ReactCardSlider from 'react-card-slider-component';
import StateContext from '../contexts/StateContext.js';


const BasicCard = () => {
  const [songs, setSongs] = useState([]);  
  const [topSong, setTopSong] = useState([]);

  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);
  const state = {...currentSongInfo}
 
   async function authentication () {
    const response = await fetch('https://academics.newtonschool.co/api/v1/music/song?limit=12', {
      method: 'GET',
      headers: {
        'projectID': 'f104bi07c490',
      }
    }) 
    const data = await response.json();   
    setSongs(data.data);
    state.songList = data.data
    setCurrentSongInfo(state)
    
    // console.log(songs)
  }

  useEffect (()=> {
    authentication()
    //console.log(state)
  }, [])

  const styleContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '20px',
    width: '1240px'
  }
 
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
    {/* <ReactCardSlider slides={songs} /> */}
    <div style={styleContainer} className='card-container'>
      < SongList songs={songs} />
    </div>
    </>
  )
}

export default BasicCard;