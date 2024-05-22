import React, { useState } from 'react'
import SearchBarButton from '../../DiscoverPage/SearchSong/SearchBarButton';
import './LandingPageSearchInput.css';

const LandingPageSearchInput = () => {
    const [songNameTitle, setSongNameTitle] = useState();
    
  return (
    <div className='box1' >
        <input 
            className='inputStyle'  
            type='text' 
            onChange={e => {setSongNameTitle(e.target.value)}} 
            placeholder='Search for songs, artists, bands, podcast.....' 
        />
        <div className='styleDiv' >
            <SearchBarButton songNameTitle={songNameTitle} />
        </div>
    </div>
  )
}

export default LandingPageSearchInput;