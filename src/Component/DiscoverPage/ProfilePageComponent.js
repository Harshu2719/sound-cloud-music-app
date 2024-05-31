import React, { useContext } from 'react';
import './ProfilePageComponent.css';
import UserStateContext from '../contexts/UserStateContext';
import Header from './Header/Header';
import { RxAvatar } from "react-icons/rx";
import ProfilePageComponentList from './ProfilePageComponentList';
import LogoutButton from '../Nav/LogoutButton/LogoutButton';

const ProfilePageComponent = () => {
    const {userInfo, setUserInfo} = useContext(UserStateContext);
  return (
    <>
        <Header />
        <div className='main_div_profile'>
            <div className='flex_div'>
                <div className='uploadImageStyle'><RxAvatar size={200} /></div>
                <div className='uploadNameStyle'>
                    {userInfo?.name}
                </div>
                <div className='logout_button_position'><LogoutButton /></div>
                
            </div>
            <ProfilePageComponentList />
        </div>
        
    </>
  )
}

export default ProfilePageComponent;