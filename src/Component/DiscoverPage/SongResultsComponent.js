import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SongList from './SongsFromAPI/SongList';
import Header from './Header/Header';

const SongResultsComponent = () => {
    const [searchedSong, setSearchedSong] = useState([]);
    const [isSongFound, setIsSongFound] = useState(true);
    const {key, value} = useParams();
    // let endUrl = `search={"${key}":"${value}"}`;
    let endUrl = '';
      if(key === 'featured' || key === 'mood') {
        endUrl = `filter={"${key}":"${value}"}`
      } else {
        endUrl = `search={"${key}":"${value}"}`
      }
    const  searchSong = async ()=> {
        try{
            const header = {
              'projectID': "f104bi07c490",
              "Content-Type": "application/json"
            };
            const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song?${endUrl}`, {
                method: 'GET', 
                headers: header,
            })
            const data = await response.json();
            setSearchedSong(data?.data);
            if(response.ok) {
              //alert("There is no problem")
                setIsSongFound(true)
            } else{
                setIsSongFound(false);
            }
        } catch {
            alert('Not responding server')
        }
    }

    useEffect(()=>{
             searchSong();     
    }, [value])

    const style = {
        width: '1240px', 
        margin: 'auto',
        paddingTop: '25px'
    }
  return (
    <>
      <Header />
      <div style={style}>
        {(key === 'mood') ? (
          <>
            <h2>All {value} Songs</h2> 
            <div style={style}>
              <SongList songs={searchedSong} />
            </div>
          </>
          ): (
          <div style={style}>
            <h2> Search results for '{value}'</h2>
            {isSongFound ? <SongList songs={searchedSong} /> : <h3>No Song Found</h3>}
          </div>
        )}
      </div>
    </>
  )
}

export default SongResultsComponent