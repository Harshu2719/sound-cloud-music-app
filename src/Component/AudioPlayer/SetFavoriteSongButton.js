import React, {useContext} from 'react'
import StateContext from '../contexts/StateContext';

const SetFavoriteSongButton = ({currentlyPlayingSong}) => {

  const  setFavorite = async ()=> {
    try{
        const header = {
          "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2I4YmFhM2RiMTczM2JhY2ExMTA1ZiIsImlhdCI6MTcwNzk5MzE0MywiZXhwIjoxNzM5NTI5MTQzfQ.D56oGg6_uKX2eBjCXgi5i-dQxts_mS7mJbAdvtvPYG8',
          "projectID": "f104bi07c490",
          "Content-Type": "application/json"
        };
        const songDetail = {
          songId: currentlyPlayingSong?._id
      };
        const patchSong = await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify(songDetail)  
        })
        if(!patchSong.ok) {
          alert("There is some problem")
        }
    } catch {
        alert('Not responding server')
    }
}
  const style = {
    background: 'transparent',
    border: 'none'
  }
    
  return (
    
    <button style={style} onClick={setFavorite}>🖤</button>
    
  )
}

export default SetFavoriteSongButton;