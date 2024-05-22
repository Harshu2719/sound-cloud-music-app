import { createContext, useState } from "react";


const historySong = {historySongList: [], songIndex: 0 }
const HistorySongContext = createContext({historySong})

export default HistorySongContext;