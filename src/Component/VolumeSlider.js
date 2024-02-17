import React, {useEffect, useState} from 'react'
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";

const VolumeSlider = ({audioRef}) => {
    const [volume, setVolume] = useState(60);
    const [volumeBtn, setVolumeBtn] = useState(VscUnmute);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    useEffect(() => {
      setVolumeBtn(VscUnmute);
        if (audioRef) {
          audioRef.current.volume = volume / 100;
        }
        if(audioRef.current.volume === 0) {
          setVolumeBtn(VscMute)
        }
      }, [volume, audioRef]);

      useEffect(()=> {
        if(isClicked) {
          setVolumeBtn(VscMute)
          setVolume(0);
        } else {
          setVolumeBtn(VscUnmute)
          setVolume(audioRef.current.volume)
        }
      }, [isClicked])

      const style={
        background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
        // webkitAppearance: 'slider-vertical'
      }
  return (
    <div>
        <button onClick={()=>{setIsClicked(!isClicked)}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >{volumeBtn}</button>
        {<input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} style={style} />}
    </div>
  )
}

export default VolumeSlider;