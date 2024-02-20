import React, {createContext, useState} from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const ContextAPI = () => {

    const [play, setPlay] = useState(false);
    const playContext = createContext(play);

    <playContext.Provider value={play}>
        <songList />
        <AudioPlayer />
    </playContext.Provider>

  return (
    <div>ContextAPI</div>
  )
}

export default ContextAPI