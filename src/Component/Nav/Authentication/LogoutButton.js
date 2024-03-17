import React, { useContext, useEffect } from 'react'
import UserStateContext from '../../contexts/UserStateContext';
import { Link } from 'react-router-dom';

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
        setUserInfo(state)
    }
    const style = {
        outline: '0',
        color: '#ccc',
        backgroundColor: '#333',
        borderBottom: 'none',
        // display: 'block',
        padding: '12px 0',
        height: '46px',
        boxSizing: 'border-box',
        textAlign: 'center',
        width: '104px',
        borderLeft: '1px solid #111',
        fontFamily: 'sans-serif',
        fontWeight: '100',
        lineHeight: '1.5',
        textDecoration: 'none',
        marginLeft: '5px',
        borderTop: '1px',
        textDecoration: 'none',
        paddingLeft: '5px',
        paddingRight: '5px',
        borderRight: 'none'
    }

  return (
    <>
        <div style={{...style, border: 'none', width: '', color: 'orange'}}>Hi! {state.name}</div>
        <Link to='/' >
            <button style={style} onClick={()=> {click()}}>Log out</button>
            </Link>
    </>
  )
}

export default LogoutButton