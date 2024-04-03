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
        backgroundColor: '#f50',
        borderColor: '#f50',
        color: '#fff',
    } 

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '70px'}}>
        <Link style={style} to='discover'>Explore Trending Songs</Link>
    </div>
  )
}

export default ExploreTrendingSongs;