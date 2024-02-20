import React, { useState, useEffect} from 'react';
import SongList from '../SongsFromAPI/SongList';


const SearchBarButton = ({songNameTitle})=> {
    const [searchedSong, setSearchedSong] = useState([]);
    const [isSongFound, setIsSongFound] = useState(true);
    
    const  searchSong = async ()=> {
        try{
            const header = {
              'projectID': "f104bi07c490",
              "Content-Type": "application/json"
            };
            const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song?search={"title":"${songNameTitle}"}`, {
                method: 'GET', 
                headers: header,
            })
            const data = await response.json();
            setSearchedSong(data?.data);
            if(response.ok) {
              alert("There is no problem")
                setIsSongFound(true)
            } else{
                setIsSongFound(false);
            }
        } catch {
            alert('Not responding server')
        }
    }
    
    const styleBtn = {
        height: '15px',
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

    return(
    <>
        <button style={styleBtn} onClick={searchSong}></button>
        {/* {isSongFound ? <SongList songs={searchedSong} /> : <h3>No Song Found</h3>} */}
    </>
    )
}
export default SearchBarButton;