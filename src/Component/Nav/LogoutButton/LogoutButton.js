import React, { useContext, useEffect } from 'react'
import UserStateContext from '../../contexts/UserStateContext';
import { Link } from 'react-router-dom';
import './LogoutButton.css';
import ForArtistButton from '../../DiscoverPage/Header/ForArtistButton';
import TryNextProButton from '../../DiscoverPage/Header/TryNextProButton';

const LogoutButton = () => {
    const {userInfo, setUserInfo} = useContext(UserStateContext)
    const state = {...userInfo};


    useEffect(()=> {
      state.name = localStorage.getItem('name');
      setUserInfo(state)
    }, [])
    

    const click = ()=> {
        state.isLoggedIn = false;
        localStorage.clear();
        setUserInfo(state);
        location.href = '/';
    }

  return (
    <>
      <div >
        <Link to='/' >
            <div><button className='styleButton' onClick={()=> {click()}}>Log out</button></div>
        </Link>
      </div>
        
    </>
  )
}

export default LogoutButton