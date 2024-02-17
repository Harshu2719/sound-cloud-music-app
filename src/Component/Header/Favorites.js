import React from 'react';
import {Link} from 'react-router-dom';

const Favorites = ({style}) => {
  return (
    <Link style={style} to='/Favorites'>Favriotes</Link>
  )
}

export default Favorites;