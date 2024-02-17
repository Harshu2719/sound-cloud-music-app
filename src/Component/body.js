import  React, { useEffect, useState } from 'react';
import {base_URL} from './constant';
import SongList from './SongList.js';
import NewReleaseSong from './NewReleaseSong.js';
import ReactCardSlider from 'react-card-slider-component';


const BasicCard = () => {
  const [songs, setSongs] = useState([]);  
  const [topSong, setTopSong] = useState([]);
 
   async function authentication () {
    const response = await fetch('https://academics.newtonschool.co/api/v1/music/song', {
      method: 'GET',
      headers: {
        'projectID': 'f104bi07c490',
      }
    }) 
    const data = await response.json();   
    setSongs(data.data);
  }

  useEffect (()=> {
    authentication()
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
  console.log(topSong)
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