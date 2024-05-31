import React from 'react';
import TryNextProButton from './Header/TryNextProButton';
import ForArtistButton from './Header/ForArtistButton';
import UploadButton from './Header/UploadButton';
import NotificationButton from './NotificationButton';
import MailButton from './MailButton';
import LogoutButton from '../Nav/LogoutButton/LogoutButton';
import './AfterLoginComponentsStyle.css';
import UserNameComponents from '../Nav/LogoutButton/UserNameComponent';
import ChevronDownLogo from './DropDownFirst';
import ProfilePageComponent from './ProfilePageComponent.js';
import ProfileButton from './Header/ProfileButton.js';

const AfterLoginComponents = ()=> {
    return (
        <>
        <div className='afterLoginComponentStyle' >
            <TryNextProButton />
            <ForArtistButton />
            <UploadButton />
            <NotificationButton />
            <MailButton />
            <ProfileButton />
            {/* <LogoutButton /> */}
        </div>
            
        </>
    )
}

export default AfterLoginComponents;