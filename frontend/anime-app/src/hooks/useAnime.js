import { useContext } from "react";
import { getAnimes } from '../services/AnimeServices';
import { AnimeContext } from "../AnimeContext";


export function useAnime(){
    const {animeInfo, setAnimeInfo, searchStatus , setSearchStatus} = useContext(AnimeContext);

    const searchAnime = (search) => {
        getAnimes(search).then((res) => {
            setAnimeInfo(res);
            console.log(animeInfo);
            setSearchStatus(true);
        }).catch(
            (err)=>{setSearchStatus(false)}
        );
    };

    const pushNewPage = async() => {
        let newAnimeInfo = {...animeInfo};
        newAnimeInfo.page = Number(newAnimeInfo.page) + 1
        let animes = await getAnimes( newAnimeInfo.searched, newAnimeInfo.page );
        let newPageResult = animes.resultsList;
        newAnimeInfo.resultsList = [...newAnimeInfo.resultsList, ...newPageResult];
        setAnimeInfo(newAnimeInfo); 

    };

    return [animeInfo, searchAnime, pushNewPage, searchStatus]
}