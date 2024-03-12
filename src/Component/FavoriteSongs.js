import React, {useState, useEffect, useContext} from 'react'
import SongList from './SongsFromAPI/SongList';
import { Link } from 'react-router-dom';
import StateContext from './contexts/StateContext';

const FavoriteSongs = () => {
    const [favoriteSongs, setFavoriteSongs] = useState([]);
    const {currentSongInfo} = useContext(StateContext)

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
        } catch {
            alert('Not responding server')
        }
    }
    useEffect(()=> {
        setFavorite()
    }, [currentSongInfo.favBtn])

    const style = {
        backgroundImage: `url(https://a-v2.sndcdn.com/assets/images/likes-3bcb162f.png)`,
        backgroundSize: '240px 167px',
        height: '167px',
        backgroundRepeat: 'no-repeat',
        marginLeft: 'auto',
        textAlign: 'center',
        backgroundPosition: '50% 50%',
        
    }
    const styleLink = {
        color: '#38d',
        textDecoration: 'none',
        // paddingLeft: 
    }
    console.log(localStorage.getItem('token'));
    return (
        <div style={{width: '1240px', margin: 'auto', paddingTop: '25px'}}>
            {(localStorage.getItem('token') === null) ? (<>
                <div style={{width: '1240px', marginLeft: 'auto'}}>
                    <div style={{margin: 'auto', textAlign: 'center', paddingTop: '120px'}}>
                        <div style={style}></div>
                        <h3 style={{fontSize: '24px',fontFamily: 'Inter,sans-serif', fontWeight: '100', marginTop: '14px'}}>Please Login....</h3>   
                    </div>
                </div></>) :
            (favoriteSongs?.length === 0) ? (<>
                <div style={{width: '1240px', marginLeft: 'auto'}}>
                    <div style={{margin: 'auto', textAlign: 'center', paddingTop: '120px'}}>
                        <div style={style}></div>
                        <h3 style={{fontSize: '24px',fontFamily: 'Inter,sans-serif', fontWeight: '100', marginTop: '14px'}}>You have no likes yet</h3>
                        <Link style={styleLink} to='/discover'>Browse trending playlists</Link>
                    </div>
                </div></>
            ):
            (<>
                <h2>These are favorite songs</h2>
                <SongList songs={favoriteSongs}  />
            </>)
             }
        </div>
    )
}

export default FavoriteSongs