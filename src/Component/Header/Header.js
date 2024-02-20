import React from 'react'
import SigninModal from '../Nav/SigninModal';
import Logo from './Logo';
import Home from './Home';
import Favorites from './Favorites';
import Library from './Library';
import SearchInput from '../SearchSong/SearchInput';
import HeaderAuthenticationBtn from './HeaderAuthenticationBtn';

const Header = () => {

  const style = {
    outline: '0',
    color: '#ccc',
    // backgroundColor: '#111',
    borderBottom: 'none',
    display: 'block',
    padding: '12px 0',
    height: '46px',
    boxSizing: 'border-box',
    textAlign: 'center',
    width: '104px',
    borderRight: '1px solid #111',
    fontFamily: 'Inter sans-serif',
    fontWeight: '100',
    // fontSize: '14px',
    lineHeight: '1.5',
    textDecoration: 'none',
    marginLeft: '0px'
}
  const styleBox2 = {
    display: 'flex',
    // justifyContent: 'space-between',
    width: '1240px',
    height: '46px',
    backgroundColor: '#333'
  }
  const styleNav = {
    display: 'flex',
    paddingLeft: '0px',
    marginBottom: '0px',
   
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={styleBox2}>
          <div>
            <Logo />
          </div> 
          <nav style={{ height: '46px'}} >
            <ul style={styleNav}>
              <Home style={style}/>
              <Favorites style={style}/>
              <Library style={style}/>
            </ul>
          </nav>
          <div style={{flex: '1'}}>
            <SearchInput />
          </div>  
          <HeaderAuthenticationBtn />
            {/* <Profile /> */}
        </div>
    </div>
  )
}

export default Header;