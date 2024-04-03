import  React, { useContext, useEffect, useState } from 'react';
import StateContext from '../contexts/StateContext.js';
import SongList from '../DiscoverPage/SongsFromAPI/SongList.js';


const LandingPageSong = () => {
  const [songs, setSongs] = useState([]);  
  const [topSong, setTopSong] = useState([]);

  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);
  const state = {...currentSongInfo}
 
   async function authentication () {
    const response = await fetch('https://academics.newtonschool.co/api/v1/music/song?filter={"featured": "Trending songs"}&limit=12', {
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
  const styleHeading = {
    fontSize: '24px',
    textAlign: 'center',
    paddingTop: '20px',
    marginBottom: '30px',
    fontFamily: 'Inter,sans-serif',
    fontWeight: 'bolder',
    color: '#333',
    marginRight: 'auto',
    marginLeft: 'auto'
 }
  return (
    <>
    {/* <ReactCardSlider slides={songs} /> */}
    <div style={styleContainer} className='card-container'>
    <div style={styleHeading}>Hear what’s trending for free in the SoundCloud community</div>
      < SongList songs={songs} />
    </div>
    </>
  )
}

export default LandingPageSong;