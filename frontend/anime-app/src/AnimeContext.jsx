import { createContext , useState } from "react";

export const AnimeContext = createContext();

export const AnimeProvider = ({children}) => {
    const [animeInfo, setAnimeInfo] = useState({resultsList:[]});
    const [searchStatus , setSearchStatus] = useState(true);

    return(
        <AnimeContext.Provider  value = {{ animeInfo, setAnimeInfo, searchStatus , setSearchStatus }}>
            {children}
        </AnimeContext.Provider>
    );
};