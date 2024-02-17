import React, {useState, useEffect} from 'react'
import SongList from './SongList';

const FavoriteSongs = () => {
    const [favoriteSongs, setFavoriteSongs] = useState([]);

    const  setFavorite = async ()=> {
        try{
            const header = {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'projectID': "f104bi07c490"
            };
            const favSong = await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
                method: 'GET',
                headers: header,
            })
            const data = await favSong.json();
            setFavoriteSongs(data?.data?.songs)
            console.log(`Bearer ${localStorage.getItem('token')}`);
        } catch {
            alert('Not responding server')
        }
    }
    useEffect(()=> {
        console.log(favoriteSongs)
        setFavorite()
        console.log(favoriteSongs)
    }, [])
    return (
        <div>
            <h2>These are favorite songs</h2>
            {/* <div>{favoriteSongs[0]?.thumbnail}</div> */}
            <SongList songs={favoriteSongs} />
        </div>
    )
}

export default FavoriteSongs