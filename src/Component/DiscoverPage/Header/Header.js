import React, { useContext } from 'react'
import Logo from './Logo';
import HomeButton from './HomeButton';
import Favorites from './Favorites';
import SearchInput from '../SearchSong/SearchInput';
import HeaderAuthenticationBtn from './HeaderAuthenticationBtn';
import LibraryButton from './LibraryButton';
import './HeaderComponentsStyle.css'
import TryNextProButton from './TryNextProButton';
import UploadButton from './UploadButton';
import UserStateContext from '../../contexts/UserStateContext';
import ForArtistButton from './ForArtistButton';
import AfterLoginComponents from '../AfterLoginComponents';
import ProfilePageComponent from '../ProfilePageComponent';
import ProfileButton from './ProfileButton';


const Header = () => {
  const {userInfo, setUserInfo} = useContext(UserStateContext);

  
  const styleBox2 = {
    display: 'flex',
    // justifyContent: 'space-between',
    width: '82%',
    height: '46px',
    backgroundColor: '#333'
  }
  const styleNav = {
    display: 'flex',
    paddingLeft: '0px',
    marginBottom: '0px',
   
  }

  return (
    <div className='firstDivStyle' >
      <div className='secondDivStyle' >
        <div>
          <Logo />
        </div> 
        <nav style={{ height: '46px'}} >
          <ul style={styleNav}>
            <HomeButton />
            <Favorites />
            <LibraryButton />
          </ul>
        </nav>
        <div style={{flex: '1'}}>
          <SearchInput />
        </div>
        <div className='rightComponents'>
          {userInfo.isLoggedIn ? <AfterLoginComponents /> :<HeaderAuthenticationBtn />}
          {/* <UploadButton />  */}
        </div>
        <div>
          {!userInfo.isLoggedIn ? <UploadButton /> : <div></div>}
        </div> 
      </div>
    </div>
  )
}

export default Header;