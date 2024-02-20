import React from 'react';
import {Link} from 'react-router-dom';

const Favorites = ({style}) => {
  return (
    <Link style={style} to='favorites'>Favorites</Link>
  )
}

export default Favorites;