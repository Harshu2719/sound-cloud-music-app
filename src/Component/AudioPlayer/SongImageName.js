import React, { useContext , useState} from 'react'
import StateContext from '../contexts/StateContext'
import SetFavoriteSongButton from './SetFavoriteSongButton';

const SongImageName = ({currentlyPlayingSong}) => {
    const [singers, setSingers] = useState();
    const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext)
    const style = {
        padding: '0 8px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',

    }
    const styleSinger = {
      fontSize: '12px',
      color: '#999',
      display: 'flex',
      width: '100%',
      height: '17px',
      alignItems: 'center',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      wordBreak: 'normal',
      paddingLeft: '10px'
    }

  return (
    <div style={style}>
        <img style={{float: 'left', width: '30px', height: '30px'}} src = {currentSongInfo?.songList[currentSongInfo.songIndex]?.thumbnail} />
        <div style={{ flexGrow: '1', lineHeight: '1.5em', alignItems: 'center'}}>
          <div style={{display: 'inline'}}>
            <span style={{fontSize: '12px', margin: '0px', paddingLeft: '10px', fontWeight: '600'}}>{currentSongInfo?.songList[currentSongInfo.songIndex]?.title}</span>
           
          </div>
          {(currentSongInfo?.songList[currentSongInfo.songIndex]?.artist[0] != null) ? <span style={styleSinger}> {currentSongInfo?.songList[currentSongInfo.songIndex]?.artist.map(ele => {
      return (ele?.name)
    }).join(' || ')}</span> : <div></div>}
        </div>
       <span style={{marginLeft: '5px'}}><SetFavoriteSongButton currentlyPlayingSong={currentlyPlayingSong}/></span>
    </div>
  )
}

export default SongImageName