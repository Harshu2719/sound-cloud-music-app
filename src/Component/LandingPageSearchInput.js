import React, { useState } from 'react'
import SearchBarButton from './SearchSong/SearchBarButton'

const LandingPageSearchInput = () => {
    const [songNameTitle, setSongNameTitle] = useState();
const style = {
    padding: '49px 0px 0px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
}
const styleBtn = {
    height: '15px',
    width: '15px',
    // padding: '16px',
    backgroundColor: 'rgb(229, 229, 229)',
    color: 'white',
    border: 'none',
    borderRaious: '5px',
    paddingBottom: 'none',
    backgroundSize: '19px 19px',
    backgroundPosition: '50%',
    top: '15px',
    right: '20px',
    width: '15px',
    position: 'absolute',
    background: `url('https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg') 0px 0px no-repeat`,
  
}
    const styleInput = {
        padding: '0',
        display: 'inline-block',
        width: '600px',
        marginRight: '14px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: 'rgb(242, 242, 242)',
        height: '46px',
        paddingLeft: '15px',
        
    }
  return (
    <div style={style}>
        <input style={styleInput} type='text' onChange={e => {setSongNameTitle(e.target.value)}} placeholder='Search for songs, artists, bands, podcast.....' />
        <div style={{position: 'relative'}}><SearchBarButton songNameTitle={songNameTitle} /></div>
    </div>
  )
}

export default LandingPageSearchInput;