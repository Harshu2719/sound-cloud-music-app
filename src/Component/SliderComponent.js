
import { useEffect, useRef, useState } from 'react';
import SongList from './SongsFromAPI/SongList';
import Song from './SongsFromAPI/Song';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Shimmer from './SongsFromAPI/Shimmer';


const SliderComponent =({sliderSongs})=>{
    let [scrollcard,setscrollcard]=useState(0);
    const containerRef = useRef();

    const handlescrollLeft=()=>{
        console.log('right')
         containerRef.current.scrollLeft -= 500;
         //setscrollcard(containerRef.current.scrollLeft)
    }

    const handlescrollRight=()=>{
        console.log('left')
        containerRef.current.scrollLeft += 500;
        //setscrollcard()
    }
    const sliderCard = {
        display:'inline-block',
        // width:'190px',
        height:'258px',
        background:'white',
        borderRadius:'10px',
        marginLeft:'5px',
        marginRight:'5px',
        boxShadow: '5px 5px 1.25rem 0px rgb(0 0 0 / 12%)',
        // position: 'relative',
        padding: '0px',
    }
    return(
      <section className="card-slider-conatiner">
         <div className="main-slider-contianer">
             <button style={{width: '32px', height: '32px'}} className="slider-icon left" onClick={()=>{handlescrollLeft()}}> {<SlArrowLeft />}</button>
             <div className="slider" style={{scrollLeft:scrollcard}} ref={containerRef}>  
             {sliderSongs?.length === 0 ? <div style={{display: 'flex', flexWrap: 'wrap'}}><Shimmer /></div> :
             sliderSongs?.map((hits, index) => {  
                return (  
                    <div style={sliderCard}>
                         <Song song={hits} index={index} songs={sliderSongs}/>

                    </div>
                     
                )})
            }
             </div>
             <button style={{width: '32px', height: '32px',}} className="slider-icon right" onClick={()=>{handlescrollRight()}}> {<SlArrowRight />} </button>
         </div>
      </section>
    )
}

export default SliderComponent;
