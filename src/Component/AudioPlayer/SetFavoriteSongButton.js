import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../contexts/StateContext';
import { MdFavorite } from "react-icons/md";
import FavouriteSongContext from '../contexts/FavouriteSongContext';


const SetFavoriteSongButton = ({currentlyPlayingSong}) => {
  const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);
  // const [swch, setSwch] = useState(true);
  // const [color, setColor] = useState('black')
  const {favourites, setFavourites} = useContext(FavouriteSongContext);
  // const favouritesState = {...favourites};
  
  useEffect (()=> {
  const checkArray = favourites?.favouritesSongList?.filter ((songObj) => {
      return (songObj._id === currentlyPlayingSong?._id)
    })
    console.log(checkArray);
    if(checkArray.length !== 0) {
      setCurrentSongInfo({...currentSongInfo, favBtn : true})
    }
    else {
      setCurrentSongInfo({...currentSongInfo, favBtn : false})
    }
  }, [currentlyPlayingSong])
  

  const  setFavorite = async ()=> {
    try{
        const header = {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
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
        
        console.log(await patchSong.json())
        setCurrentSongInfo({...currentSongInfo, favBtn: !currentSongInfo.favBtn })
        if(localStorage.getItem('token') === null) {
          alert("You are not logged in! Please log in to get access.")
        }

    } catch {
        alert('Not responding server')
    }
  }
  
  const style = {
    background: 'transparent',
    border: 'none',
    // color: favoritesState.favouritesSongButtonColor,
  }
    
  return (
    
    <button style={style} 
      onClick={setFavorite}>
      <MdFavorite fill={(currentSongInfo.favBtn) ? '#f50' : 'black'} size={24}/>
    </button> 
  )
}

export default SetFavoriteSongButton;