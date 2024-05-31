import { createContext, useState } from "react";


const favouriteSong = {favouritesSongList: [], favouritesButtonColor: 'Black' }
const FavouriteSongContext = createContext({favouriteSong});

export default FavouriteSongContext;