import React from 'react'
import {Link} from 'react-router-dom';
import './HeaderComponentsStyle.css'

const LibraryButton = () => {
  return (
    <Link className='header_leftside_Components_Common_Style' to='/library'>Library</Link>
  )
}

export default LibraryButton;