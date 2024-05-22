import React, { useContext, useEffect } from 'react'
import UserStateContext from '../../contexts/UserStateContext';
import './LogoutButton.css';

const UserNameComponents = () => {
    const {userInfo, setUserInfo} = useContext(UserStateContext)
    const state = {...userInfo};
    console.log(userInfo)

    useEffect(()=> {
      state.name = localStorage.getItem('name');
      setUserInfo(state)
    }, [])

    return (
        <div className='styleDiv' >Hi! {state.name}</div>
    )
}
export default UserNameComponents ;