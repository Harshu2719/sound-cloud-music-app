import { createContext, useState } from "react";


// const [songList, setSongList] = useState([]);
const currentSongInfo = {play: false, songIndex: 0, songList: [], allSongs: [], isAudioPlayerVisible: false, favBtn: false, recordHistory: true}

const StateContext =  createContext({currentSongInfo});

export default StateContext;