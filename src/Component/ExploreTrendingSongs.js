import React from 'react';
import { Link } from 'react-router-dom';

const ExploreTrendingSongs = () => {
    const style ={
        margin: '20px', 
        padding: '20px', 
        border: '1px solid black', 
        borderRadius: '5px',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: 'darkgray'
    } 

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <Link style={style} to='/Home'>Explore Trending Songs</Link>
    </div>
  )
}

export default ExploreTrendingSongs;