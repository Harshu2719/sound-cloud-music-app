import React, { useContext } from 'react';
import stateContextSongMoods from '../contexts/UserStateContext';
import SongList from '../DiscoverPage/SongsFromAPI/SongList';


const TrendingHits = () => {
    const {songMoods, setSongMoods} = useContext(stateContextSongMoods)
    console.log(songMoods)
  return (
    <div><SongList songs={songMoods} /></div>
  )
}

export default TrendingHits