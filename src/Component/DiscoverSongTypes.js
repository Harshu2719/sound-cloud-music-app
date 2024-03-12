import React, { useState, useEffect, useContext } from 'react';
import SongList from './SongsFromAPI/SongList';
import SliderComponent from './SliderComponent.js';
import StateContext from './contexts/StateContext.js';
import {Link} from 'react-router-dom';
import StateContextSongMoods from './contexts/UserStateContext.js';
import HistoryComponent from './HistoryComponent.js';

const DiscoverSongTypes = () => {
    const [romanticMoodSongs, setRomanticMoodSongs] = useState([]);
    const [sadMoodSongs, setSadMoodSongs] = useState([]);
    // const [allSong, setAllSong] = useState([]);
    const [trendingSongs, setTrendingSongs] = useState([]);
    const [happyMoodSongs, setHappyMoodSongs] = useState([]);
    const [album, seAlbum] = useState([]);
    const [excitedMoodSongs, setExcitedMoodSongs] = useState([])
    const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext)
    const state = {...currentSongInfo}
    const {songMoods} = useContext(StateContextSongMoods)
    const songState = {...songMoods}

    async function authentication () {
        const response = await fetch('https://academics.newtonschool.co/api/v1/music/song?limit=400', {
          method: 'GET',
          headers: {
            'projectID': 'f104bi07c490',
          }
        }) 
        const data = await response.json(); 
        state.allSongs = data.data;
        setCurrentSongInfo(state);
        // setCurrentSongInfo({...currentSongInfo, songList: data.data})
        songSepration(data.data)
      }
      
    const songSepration = (allSong)=> {
        let happySongs = []
        let sadSongs = []
        let romanticSongs = []
        let excitedSongs = []
        let trendings = []
        allSong.forEach((song, index) => {
            //console.log(song?.featured)
            if(song?.mood === 'happy') {
             happySongs = [...happySongs, song]
            } else if (song?.mood === 'sad') {
              sadSongs = [...sadSongs, song]
            } else if(song?.mood === 'romantic') {
               romanticSongs = [...romanticSongs, song]
            } else if (song?.mood === 'excited') {
                excitedSongs = [...excitedSongs, song]
            } 
            if (song?.featured === "Trending songs") {
                //console.log('this is trending song')
                trendings = [...trendings, song]
            } 
        
        })
        setHappyMoodSongs(happySongs)
        setSadMoodSongs(sadSongs)
        setRomanticMoodSongs(romanticSongs)
        setExcitedMoodSongs(excitedSongs)
        setTrendingSongs(trendings)
        }
      useEffect (()=> {
        authentication()
      }, [])
    //console.log(trendingSongs)
    const styleHits = {
      height: '255px', 
      overflow: 'hidden'
    }
  return (
    <>
    {/* <HistoryComponent /> */}
    <div style={{width: '1240px',  margin: 'auto'}}>
        
        <h1 style={{marginTop: '30px'}}>Discover Tracks and Playlists</h1>
        <div >
            <h2>Trending Hits</h2>
            {/* <div style={styleHits}><SongList songs={trendingSongs} /></div> */}
            <SliderComponent sliderSongs={trendingSongs} />
        </div>
        <div style={{marginTop: '30px'}}>
            <h2>Romantic Hits</h2>
            <SliderComponent sliderSongs={romanticMoodSongs} />
            {/* <div style={styleHits}><SongList songs={romanticMoodSongs} /></div> */}
        </div>
        <div>
            <h2>Happy Moods</h2>
            <SliderComponent sliderSongs={happyMoodSongs} />
            {/* <div style={styleHits}><SongList songs={happyMoodSongs} /></div> */}
        </div> 
        <div>
            <h2>Mood Excited</h2>
            <SliderComponent sliderSongs={excitedMoodSongs} />
            {/* <div style={styleHits}><SongList songs={excitedMoodSongs} /></div> */}
        </div> 
        <div>
            <h2>Sad Moods</h2>
            <SliderComponent sliderSongs={sadMoodSongs} />
            {/* <div style={styleHits}><SongList songs={sadMoodSongs} /></div> */}
        </div>
        
    </div>
    
    </>
  )
}

export default DiscoverSongTypes