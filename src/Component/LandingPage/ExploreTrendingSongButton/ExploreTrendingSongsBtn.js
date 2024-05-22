import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreTrendingSongButton.css';
const ExploreTrendingSongsBtn = () => {
  return (
    <div className='divStyle' >
        <Link className='linkStyle' to='discover'>Explore Trending Songs</Link>
    </div>
  )
}

export default ExploreTrendingSongsBtn;