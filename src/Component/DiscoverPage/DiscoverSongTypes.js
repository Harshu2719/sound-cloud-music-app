import React, { useState, useEffect, useContext } from 'react';
import StateContext from '../contexts/StateContext.js';
import SliderComponent from './SliderComponent.js';
import HistoryComponent from './HistoryComponent.js';
import './DiscoverSongTypes.css';


const DiscoverSongTypes = () => {
    const [romanticMoodSongs, setRomanticMoodSongs] = useState([]);
    const [sadMoodSongs, setSadMoodSongs] = useState([]);
    const [trendingSongs, setTrendingSongs] = useState([]);
    const [happyMoodSongs, setHappyMoodSongs] = useState([]);
    const [album, seAlbum] = useState([]);
    const [excitedMoodSongs, setExcitedMoodSongs] = useState([])
    const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext)
    const state = {...currentSongInfo}

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
        songSepration(data.data)
      }
      
    const songSepration = (allSong)=> {
        let happySongs = []
        let sadSongs = []
        let romanticSongs = []
        let excitedSongs = []
        let trendings = []
        allSong?.forEach((song) => {
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
  return (
    <>
    <div className='mainLandingPage'>
      <div className='discoverPage'>
        <div className='discoverPageOne'>
          {/* <h1 style={{marginTop: '30px'}}>Discover Tracks and Playlists</h1> */}
          <div className='songCatogryStyle'>
              <h2 className='songTypeHeading'>Trending Hits</h2>
              <SliderComponent sliderSongs={trendingSongs} />
          </div>
          <div className='songCatogryStyle' >
              <h2 className='songTypeHeading'>Romantic Hits</h2>
              <SliderComponent sliderSongs={romanticMoodSongs} />
          </div>
          <div className='songCatogryStyle'>
              <h2 className='songTypeHeading'>Happy Moods</h2>
              <SliderComponent sliderSongs={happyMoodSongs} />
          </div> 
          <div className='songCatogryStyle'>
              <h2 className='songTypeHeading'>Mood Excited</h2>
              <SliderComponent sliderSongs={excitedMoodSongs} />
          </div> 
          <div className='songCatogryStyle'>
              <h2 className='songTypeHeading'>Sad Moods</h2>
              <SliderComponent sliderSongs={sadMoodSongs} />
          </div>
        </div >
        <div className='discoverPageTwo'>
          <HistoryComponent />
        </div>
      </div> 
    </div>
    
    </>
  )
}

export default DiscoverSongTypes