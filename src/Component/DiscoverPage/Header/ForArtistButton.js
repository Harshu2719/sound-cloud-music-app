import React from 'react'
import { Link } from 'react-router-dom';
import './HeaderComponentsStyle.css';

const ForArtistButton = () => {
  return (
    <Link to='/forartist' className='headerRightSideButtonStyle' >
        For Artist
    </Link>
  )
}

export default ForArtistButton