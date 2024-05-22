import React from 'react';
import './HeaderComponentsStyle.css'
import { Link } from 'react-router-dom';

const TryNextProButton = () => {
  return (
    <Link to='/trynextpro' id='tryNextProStyle' >Try Next Pro</Link >
  )
}

export default TryNextProButton;