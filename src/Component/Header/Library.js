import React from 'react'
import {Link} from 'react-router-dom';

const Library = ({style}) => {
  return (
    <Link style={style} to='library'>Library</Link>
  )
}

export default Library;