import React, { useContext, useState, useEffect } from 'react';
import StateContext from '../contexts/StateContext';
import { Link, useParams } from 'react-router-dom';
import HistorySongContext from '../contexts/HistoryContext';
import './HistoryComponent.css';
import Footer from '../LandingPage/Footer/Footer';
import UserStateContext from '../contexts/UserStateContext';
import { GiPauseButton } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";


const HistoryComponent = () => {
    const {historySong, setHistorySong} = useContext(HistorySongContext);
    const stateHistorySong = {...historySong}
    const {userInfo, setUserInfo} = useContext(UserStateContext);
    const [isHovering, setIsHovering] = useState([false, false, false]);
    const [buttonIcon, setButtonIcon] = useState([false, false, false]);
    const {currentSongInfo, setCurrentSongInfo} = useContext(StateContext);

    const state = {...currentSongInfo};
    const handleMouseOver = (a) => {
        let isHoveringCopy = [...isHovering];
        isHoveringCopy = isHoveringCopy.map((e, i) =>{ return (i === a) ? true : false });
        setIsHovering(isHoveringCopy);
      };
    
      const handleMouseOut = () => {
        let isHoveringCopy = [...isHovering];
        isHoveringCopy = isHoveringCopy.map((e, i) =>{ return false });
        setIsHovering(isHoveringCopy);
      };
      const onClickFunction = (e, a)=> {
        e.preventDefault();
        handleSetPlay(a)
        handleButtonIcon(a)
        state.songIndex = a;
        state.isAudioPlayerVisible = true;
        state.songList = historySong.historySongList;
        state.recordHistory = false;
        setCurrentSongInfo(state);
      }
     
      const handleButtonIcon = (a) => { 
         let isPlaying = [];
        isPlaying = [...buttonIcon];
        isPlaying = isPlaying.map((e, i) =>{ return (i === a) ? state.play : false });
        console.log(isPlaying, '65659262594591654');            
        setButtonIcon(isPlaying);

        // if((historySong?.historySongList[a]?._id === state.songList[state.songIndex]?._id) && state.play) {
        //     array = array.map((e, i) =>{ return (i === a) ? true : false });
        // } else {
        //     array = array.map((e, i) =>{ return (i === a) ? false : e });
        //     setButtonIcon(array);
        // }
    }
    const handleSetPlay = (a)=> {
        if(state.songList[state.songIndex] != historySong.historySongList[a]) { 
          state.play = true;
        } else {
          state.play = !state.play;
        }
      }
      useEffect(()=>{
        const index = historySong?.historySongList?.findIndex((e) => e._id === state.songList[state.songIndex]?._id);
        handleButtonIcon(index);
      }, [state.songList[state.songIndex], state.play])
      
    return (
        <div className='mainDivStyle' >
            <div className='fixedDivStyle'>
                {(stateHistorySong?.historySongList[0] && userInfo.isLoggedIn) ? <div className='mainDivStyleSong'>
                    <div className='mainDivStyleOne' >
                        <h3 style={{marginBottom: '0px'}}>
                            <span className='mainDivStyleTwo'></span>
                            <span className='listening_history'>
                                Listening history
                            </span>
                        </h3>
                        <div><Link to='/history' className='listening_history'>view all</Link></div>
                    </div>
                    <div>
                        <ul className='historySongList' >
                            <li>
                                <div className='songDiv'>
                                <div className='historySongThumbnailImage'
                                    onMouseOver={()=> {handleMouseOver(0)}} 
                                    onMouseOut={()=>handleMouseOut(0)} 
                                    style={{backgroundImage: `url(${stateHistorySong?.historySongList[0]?.thumbnail})`}} >
                                    {isHovering[0] && 
                                    <button className='stylePlayButton' id='extraStyle'
                                        onClick={($event)=> {onClickFunction($event, 0)}}>
                                        {(buttonIcon[0] ? <GiPauseButton /> : <GiPlayButton />)
                                       }
                                    </button>}
                                </div>
                                    <div className ='historySongNameDivOne'>
                                        <div className='divTwo' style={{display: 'inline'}}>
                                            <span className='divTwoSpan' >{stateHistorySong?.historySongList[0]?.title}</span>
                                        </div>
                                        {(stateHistorySong?.historySongList[0]?.artist[0].name != null) ? 
                                            <span className='styleSinger'> {stateHistorySong?.historySongList[0]?.artist.map(ele => {
                                            return (ele?.name)
                                            }).join(' || ')}</span> : <div></div>
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                {(stateHistorySong?.historySongList[1]) ? <div className='songDiv'>
                                    <div className='historySongThumbnail'> 
                                        <div className='historySongThumbnailImage' 
                                            onMouseOver={()=>handleMouseOver(1)} 
                                            onMouseOut={()=>handleMouseOut(1)} 
                                            style={{backgroundImage: `url(${stateHistorySong?.historySongList[1]?.thumbnail})`}}> 
                                            {isHovering[1] && 
                                            <button className='stylePlayButton' id='extraStyle'
                                              onClick={($event)=> {onClickFunction($event, 1)}}>
                                                {(buttonIcon[1] ? <GiPauseButton /> : <GiPlayButton />)}
                                            </button>}
                                        </div>
                                    </div>
                                    <div className ='historySongNameDivOne'>
                                        <div className='divTwo' style={{display: 'inline'}}>
                                            <span className='divTwoSpan' >{stateHistorySong?.historySongList[1]?.title}</span>
                                        </div>
                                        {(stateHistorySong?.historySongList[1]?.artist[0].name != null) ? 
                                            <span className='styleSinger'> {stateHistorySong?.historySongList[1]?.artist.map(ele => {
                                            return (ele?.name)
                                            }).join(' || ')}</span> : <div></div>
                                        }
                                    </div>
                                </div> : <div></div>}
                            </li>
                            <li>
                                {(stateHistorySong?.historySongList[2]) ? <div className='songDiv'>
                                <div className='historySongThumbnailImage' 
                                            onMouseOver={()=>handleMouseOver(2)} 
                                            onMouseOut={()=>handleMouseOut(2)} 
                                            style={{backgroundImage: `url(${stateHistorySong?.historySongList[2]?.thumbnail})`}}> 
                                            {isHovering[2] && 
                                            <button className='stylePlayButton' id='extraStyle'
                                              onClick={($event)=> {onClickFunction($event, 2)}}>
                                                {(buttonIcon[2] ? <GiPauseButton /> : <GiPlayButton />)}
                                            </button>}
                                        </div>
                                    <div className ='historySongNameDivOne'>
                                        <div className='divTwo' style={{display: 'inline'}}>
                                            <span className='divTwoSpan' >{stateHistorySong?.historySongList[2]?.title}</span>
                                        </div>
                                        {(stateHistorySong?.historySongList[2]?.artist[0].name != null) ? 
                                            <span className='styleSinger'> {stateHistorySong?.historySongList[2]?.artist.map(ele => {
                                            return (ele?.name)
                                            }).join(' || ')}</span> : <div></div>
                                        }
                                    </div>
                                </div> : <div></div>}
                            </li>
                        </ul> 
                    </div>
                </div> : <div></div>}
                <div className='mainDivStyleLanguage'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HistoryComponent;