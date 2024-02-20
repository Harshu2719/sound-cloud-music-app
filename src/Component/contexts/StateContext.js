import { createContext, useState } from "react";


// const [songList, setSongList] = useState([]);
const currentSongInfo = {play: false, songIndex: 0, songList: [], isAudioPlayerVisible: false}

const StateContext =  createContext({currentSongInfo});

export default StateContext;