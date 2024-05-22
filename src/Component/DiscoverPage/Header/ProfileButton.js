import React from 'react';
import './HeaderComponentsStyle.css'
import { Link } from 'react-router-dom';

const ProfileButton = () => {
  return (
    <Link to='/profile' className='headerComponentsCommonStyle'>Profile</Link>
  )
}

export default ProfileButton;